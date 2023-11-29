#!/bin/bash

# Get the absolute path of the directory containing this script
current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Adjust the source and destination directories accordingly
source_dir="$current_dir/../utils/seeds"
dest_dir_2="$current_dir/../server/utils/Turboship/seeds"

# Check if the source directory exists
if [ -d "$source_dir" ]; then
    # Copy directory and its contents to the first destination
    cp -r "$source_dir"/* "$dest_dir_1"

    # Copy directory and its contents to the second destination
    cp -r "$source_dir"/* "$dest_dir_2"

    echo "Directory copied successfully."
else
    echo "Source directory does not exist."
fi
