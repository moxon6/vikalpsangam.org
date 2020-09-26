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

destination_db = "wordpress"

def use_db(cur):
    cur.execute(f"USE {destination_db};")
    cur.execute("SET GLOBAL max_allowed_packet=1073741824;")
    cur.execute("SET GLOBAL max_allowed_packet=1073741824;")

def get_connection():
    return mysql.connect(
        host="db",
        user="root",
        passwd="somewordpress")

def migrate_urls(cur, connection):
    query= "UPDATE wp_posts SET post_content = REPLACE(post_content, 'http://www.vikalpsangam.org/', '/')"
    cur.execute(query)
    connection.commit()

def main():
    connection = get_connection()

    with connection.cursor() as cur:        
        use_db(cur)
        migrate_urls(cur, connection)

if __name__ == "__main__":
    main()