import sys
import os
import subprocess
import requests

def get_url(article_name):
    return f'http://localhost:8000/article/{article_name}/'

if len(sys.argv) < 2:
    raise SystemExit("Please pass checkpoint index to verify.\n")

def get_filename(checkpoint_name):
    for checkpoint in os.listdir('migrated-articles'):
        if str.startswith(checkpoint, checkpoint_name):
            return checkpoint

def get_printable(input_str):
    return ''.join(c for c in input_str if c.isprintable())

def remove_spaces(input_str):
    return input_str.replace(" ", "")

def verify_endpoints():
    articles_filename = get_filename(f"articles-{sys.argv[1]}_")
    if articles_filename is None:
        raise SystemExit("No such file exists")
    article_list_path = f"migrated-articles/{articles_filename}"
    with open(article_list_path, encoding="utf-8") as f:    
        lines = f.readlines()
        for line in lines:
            line = get_printable(line)
            line = remove_spaces(line)
            url = get_url(line)
            response = requests.get(url)
            if response.status_code != 200:
                print("Fail", response.status_code, url, " " in url)
            else:
                print("Success", response.status_code)

    

verify_endpoints()
