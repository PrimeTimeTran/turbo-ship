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

# Debugging output
print("Source directory contents:")
for root, dirs, files in os.walk(source_dir):
    print(f"Root: {root}")
    print(f"Directories: {dirs}")
    print(f"Files: {files}")

# Read each line of the file list
with open(file_list, 'r') as file:
    for item in file:
        item = item.strip()  # Remove any trailing newline or whitespace
        print(f"Processing: {item}")

        # Check if the item exists in the source directory
        item_path = os.path.join(source_dir, item)
        if os.path.exists(item_path):
            # Create the destination directory structure if it doesn't exist
            dest_item = os.path.join(destination_dir, item)
            dest_item_dir = os.path.dirname(dest_item)
            os.makedirs(dest_item_dir, exist_ok=True)

            # Copy the item to the destination directory maintaining structure
            if os.path.isdir(item_path):
                shutil.copytree(item_path, dest_item, dirs_exist_ok=True)
            else:
                shutil.copy2(item_path, dest_item)
            print(f"Copied {item} to {destination_dir}")
        else:
            print(f"{item} does not exist in {source_dir}")
