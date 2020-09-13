import sys
import os
import sh


if len(sys.argv) < 2:
    raise SystemExit("Please pass checkpoint index to roll back to.\n")

def get_filename(checkpoint_name):
    for checkpoint in os.listdir('checkpoints'):
        if str.startswith(checkpoint, checkpoint_name):
            return checkpoint

def rollback_db():
    checkpoint_file = get_filename(f"checkpoint-{sys.argv[1]}_")
    if checkpoint_file is None:
        raise SystemExit("No such file exists")
    sh.bash("-c", f'MYSQL_PWD=somewordpress mysql -h db -u root < ./checkpoints/{checkpoint_file}', shell=True)

rollback_db()
print("Rollback success")