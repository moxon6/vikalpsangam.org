from time import strftime
import mysql.connector as mysql
import os
import subprocess
import pathlib
import sqlparse
from urllib import parse
from tqdm import tqdm
import html
import sh
import os
from collections import Counter
from PIL import Image
from phpserialize import serialize


destination_db = "django_migration"
blogpost_table = "blog_blogpost"

def get_connection():
    return mysql.connect(
        host="db",
        user="root",
        passwd="somewordpress")

def use_db(cur):
    cur.execute(f"USE {destination_db};")
    cur.execute("SET GLOBAL max_allowed_packet=1073741824;")
    cur.execute("SET GLOBAL max_allowed_packet=1073741824;")

def get_files_list(top):
    out = []
    for root, dirs, files in os.walk(top):
        for name in files:
            out.append(os.path.join(root, name))
    return out

def get_local_path(image_path):
    return os.path.abspath(
        image_path.replace("http://localhost:8000/wp-content/", "../")
    )

def get_short_url(image_path):
    return image_path.split("/uploads/")[1]

def migrate_featured_images(cur, connection):
    migrate_posts_query = open('./queries/migrate-featured-images.sql').read()
    cur.execute(migrate_posts_query)
    connection.commit()

def associate_posts_images(cur, connection):
    migrate_posts_query = open('./queries/migrate-featured-image-links.sql').read()
    cur.execute(migrate_posts_query)
    connection.commit()

def migrate_image_metadata(cur, connection):
    query = "SELECT id, guid FROM wordpress.wp_posts where guid like '%/uploads/migrate/%'"
    add_attachment = """
        INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) VALUES
        ( "%s", "_wp_attached_file", "%s" )
    """

    attachment_meta = """
        INSERT INTO wordpress.wp_postmeta (post_id, meta_key, meta_value) VALUES
        ( "%s", "_wp_attachment_metadata", "%s" )
    """

    cur.execute(query)
    for row in tqdm(cur.fetchall()):
        image_id, image_url = row
        insertion = add_attachment % (image_id, get_short_url(image_url))
        cur.execute(insertion)
        connection.commit()

        local_path = get_local_path(image_url)
        if os.path.exists(local_path):

            with Image.open(local_path) as img:
                width, height = img.size

                meta_value_dict = {
                    "width": int(width),
                    "height": int(height),
                    "file": str(get_short_url(image_url))
                }

                serialized = serialize(meta_value_dict).decode("utf-8")
                meta_query = attachment_meta % (image_id, serialized.replace("\"", "\\\""))
                cur.execute(meta_query)
                connection.commit()
        else:
            print(f"MISSING FILE {local_path}")


def main():
    connection = get_connection()
    with connection.cursor() as cur:        
        use_db(cur)
        migrate_featured_images(cur, connection)
        migrate_image_metadata(cur, connection)
        associate_posts_images(cur, connection)

if __name__ == "__main__":
    main()

