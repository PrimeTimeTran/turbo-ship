#!/bin/bash

# Get the absolute path of the directory containing this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Path to the directory containing files & dirs to be copied
source_dir="$SCRIPT_DIR/../flutter"

# Destination directory
destination_dir="$SCRIPT_DIR/../test-flutter"

# Path to the file list
file_list="$SCRIPT_DIR/copyFlutterList.txt"

# Check if the file list exists
if [ ! -f "$file_list" ]; then
    echo "File list not found: $file_list"
    exit 1
fi

while IFS= read -r item; do
    # Check if the item exists in the source directory
    if [ -e "$source_dir/$item" ]; then
        # Create the destination directory structure if it doesn't exist
        mkdir -p "$destination_dir/$(dirname "$item")"
        
        # Copy the item to the destination directory maintaining structure
        cp -r "$source_dir/$item" "$destination_dir/$item"
        echo "Copied $item to $destination_dir"
    else
        echo "$item does not exist in $source_dir"
    fi
done < "$file_list"