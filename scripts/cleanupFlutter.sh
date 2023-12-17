#!/bin/bash

# Get the directory where the script is located
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Define an array of files and directories to delete
filesOrDirectories=(
  "$script_dir/../netlify/functions/esm-muxter/Turboship/flutter/.dart_tool"
  "$script_dir/../netlify/functions/esm-muxter/Turboship/flutter/build"
  "$script_dir/../netlify/functions/esm-muxter/Turboship/flutter/.flutter-plugins"
  "$script_dir/../netlify/functions/esm-muxter/Turboship/flutter/.flutter-plugins-dependencies"
  "$script_dir/../netlify/functions/esm-muxter/Turboship/flutter/pubspec.lock"
)

# Loop through the array and delete each file/directory
for item in "${filesOrDirectories[@]}"; do
  if [ -e "$item" ]; then
    echo "Deleting: $item"
    rm -rf "$item"
  else
    echo "File or directory not found: $item"
  fi
done
