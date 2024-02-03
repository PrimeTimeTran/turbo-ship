import os
import shutil
# Turbo: This script will copy the 'common' src files which are shared between all Flutter projects regardless of template
def copy_files(source_dir, destination_dir, file_list):
    with open(file_list, 'r') as file:
        files_and_dirs = file.read().splitlines()
    
    for item in files_and_dirs:
        source_path = os.path.join(source_dir, item)
        destination_path = os.path.join(destination_dir, item)

        if os.path.exists(source_path):
            if os.path.isdir(source_path):
                shutil.copytree(source_path, destination_path, dirs_exist_ok=True)
            else:
                os.makedirs(os.path.dirname(destination_path), exist_ok=True)
                shutil.copy2(source_path, destination_path)
        else:
            print(f"File or directory not found: {source_path}")

if __name__ == "__main__":
    source_directory = "./flutter"
    destination_directory = "./netlify/functions/esm-muxter/Turboship/flutter"
    file_list_path = "./scripts/copyFlutter.txt"
    
    copy_files(source_directory, destination_directory, file_list_path)