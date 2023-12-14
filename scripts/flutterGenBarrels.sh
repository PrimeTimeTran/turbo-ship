#!/bin/bash

search_and_create_all_dart() {
  local directory=$1

  # Look for all.dart in the directory
  if [ ! -f "$directory/all.dart" ]; then
    touch "$directory/all.dart"
  fi

  # Find all files and directories in the current directory
  for item in "$directory"/*; do
    if [ -d "$item" ]; then
      # For directories, recursively call the function
      search_and_create_all_dart "$item"
    elif [ -f "$item" ]; then
      # For files, add export statement to all.dart
      if [[ "$item" != "$directory/all.dart" ]]; then
        echo "export '$(basename "$item")';" >> "$directory/all.dart"
      fi
    fi
  done

  # Export all.dart of subdirectories
  for subdir in "$directory"/*/; do
    local subdir_name=$(basename "$subdir")
    echo "export '$subdir_name/all.dart';" >> "$directory/all.dart"
  done
}

# Start the recursion from the current directory
search_and_create_all_dart "$(pwd)/test-flutter"
