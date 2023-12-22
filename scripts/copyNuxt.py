import os
import shutil

# Get the absolute path of the directory containing this script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# Path to the directory containing files & dirs to be copied
source_dir = os.path.abspath(os.path.join(SCRIPT_DIR, '..'))

# Destination directory
destination_dir = os.path.abspath(os.path.join(SCRIPT_DIR, '..', 'netlify', 'functions', 'esm-muxter', 'Turboship', 'nuxt'))

# Path to the file list
file_list = os.path.join(SCRIPT_DIR, 'copyNuxt.txt')

# Check if the file list exists
if not os.path.isfile(file_list):
    print(f"File list not found: {file_list}")
    exit(1)

# Read the lines from the file
with open(file_list, 'r') as f:
    lines = f.readlines()

# List to store directories for which contents will be copied
directories_to_copy = []

# Iterate through the lines to identify directories for content copy
for item in lines:
    item = item.strip()  # Remove any trailing newline or whitespace
    item_path = os.path.join(source_dir, item)
    if os.path.exists(item_path) and os.path.isdir(item_path):
        directories_to_copy.append(item_path)

# Copy the contents of identified directories
for directory in directories_to_copy:
    for root, dirs, files in os.walk(directory):
        dest_path = os.path.join(destination_dir, os.path.relpath(root, source_dir))
        os.makedirs(dest_path, exist_ok=True)
        for file in files:
            source_file = os.path.join(root, file)
            dest_file = os.path.join(dest_path, file)
            shutil.copy2(source_file, dest_file)
            print(f"Copied {source_file} to {dest_file}")

# Filter out directories from the list
files_to_copy = [item.strip() for item in lines if not os.path.isdir(os.path.join(source_dir, item.strip()))]

# Copy files to the destination directory, overwriting if they exist
for item in files_to_copy:
    item_path = os.path.join(source_dir, item)
    dest_item = os.path.join(destination_dir, item)
    dest_dir = os.path.dirname(dest_item)
    os.makedirs(dest_dir, exist_ok=True)
    shutil.copy2(item_path, dest_item)
    print(f"Copied {item_path} to {dest_item} (Overwritten if exists)")
