from time import strftime
import mysql.connector as mysql
import os
import subprocess
import pathlib
import sqlparse
from urllib import parse
from tqdm import tqdm
import html

def runcommand(command):
    result = subprocess.run(
        command,
        stdout=subprocess.PIPE,
        check=True
    )
    return result.stdout.decode()

destination_db = "django_migration"
blogpost_table = "blog_blogpost"

def get_connection():
    
    return mysql.connect(
        host="db",
        user="root",
        passwd="somewordpress")

def rebuild_db(cur):

    rebuild_database_query = open('./queries/rebuild_database.sql').read()
    statements = sqlparse.split(rebuild_database_query)
    for statement in statements:
        cur.execute(statement)

def use_db(cur):
    cur.execute(f"USE {destination_db};")
    cur.execute("SET GLOBAL max_allowed_packet=1073741824;")
    cur.execute("SET GLOBAL max_allowed_packet=1073741824;")

def populate_db(cur):
    mysql_path = create_mysql_migration_file()
    sql_query = open(mysql_path).read()

    print("Splitting query...")
    statements = sqlparse.split(sql_query)
    print("Split complete")

    for statement in tqdm(statements):
        cur.execute(statement)



def create_mysql_migration_file():
    now = strftime("%Y-%m-%d-%H-%M-%S")
    
    postgres_input_path = os.path.abspath("../db.postgres.sql")
    script_path = os.path.abspath("./migrate-database/pg2mysql_cli.php")
    out_dir =  f"/tmp/mysql-migration/{now}"
    mysql_path = f"{out_dir}/db.mysql.sql"
    
    pathlib.Path(out_dir).mkdir(parents=True, exist_ok=True)

    result = runcommand(['php', script_path, postgres_input_path, mysql_path])

    for table in tables:
        command = ["sed", "-i", "-e",  f's/public.{table}/{table}/g', mysql_path]
        result = runcommand(command)


    
    command = ["sed", "-i", "-e",  's/ip_address inet,/ip_address varchar(15),/g', mysql_path]
    result = runcommand(command)
    return mysql_path

def encode_post_urls(cur, connection):
    cur.execute(f"SELECT id, slug FROM {blogpost_table}")
    for row in tqdm(cur.fetchall()):
        if not str.isascii(row[1]):
            b = parse.urlencode({"": row[1]})[1:]
            b = b[:255]
            query=f"Update {blogpost_table} set slug ='" + b + "' where id=" + str(row[0]) +';'
            cur.execute(query)
            connection.commit()

def update_media_urls(cur, connection):
    query= "UPDATE blog_blogpost SET content = REPLACE(content, '/static/media/uploads/', '/wp-content/uploads/migrate/')"
    cur.execute(query)
    connection.commit()

def migrate_posts_over(cur, connection):
    migrate_posts_query = open('./queries/migrate-posts.sql').read()
    cur.execute(migrate_posts_query)
    connection.commit()

def migrate_post_authors_over(cur, connection):
    migrate_authors_query = open('./queries/migrate-authors.sql').read()
    cur.execute(migrate_authors_query)
    connection.commit()

def main():
    connection = get_connection()

    with connection.cursor() as cur:        
        rebuild_db(cur)
        use_db(cur)
        populate_db(cur)
        encode_post_urls(cur, connection)
        update_media_urls(cur, connection)
        migrate_posts_over(cur, connection)
        migrate_post_authors_over(cur, connection)

tables = [
    "auth_group",
    "auth_group_permissions",
    "auth_permission",
    "auth_user",
    "auth_user_groups",
    "auth_user_user_permissions",
    "blog_blogcategory",
    "blog_blogpost",
    "blog_blogpost_categories",
    "blog_blogpost_related_posts",
    "conf_setting",
    "core_sitepermission",
    "core_sitepermission_sites",
    "django_admin_log",
    "django_comment_flags",
    "django_comments",
    "django_content_type",
    "django_redirect",
    "django_session",
    "django_site",
    "forms_field",
    "forms_fieldentry",
    "forms_form",
    "forms_formentry",
    "galleries_gallery",
    "galleries_galleryimage",
    "generic_assignedkeyword",
    "generic_keyword",
    "generic_rating",
    "generic_threadedcomment",
    "pages_link",
    "pages_page",
    "pages_richtextpage",
    "south_migrationhistory",
    "twitter_query",
    "twitter_tweet",
    "vikalp_article",
    "vikalp_article_article_categories",
    "vikalp_articlecategory"
]

if __name__ == "__main__":
    main()

