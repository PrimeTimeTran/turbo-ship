import os
import subprocess

# List of file extensions to ignore
IGNORED_EXTENSIONS = ['.g.dart', '.freezed.dart']

# List of files to ignore (relative to flutter/lib)
BLACKLISTED_ALL_DART_FILES = [
    'view/content/documents/all.dart',
    'main_development.dart',
    'main_production.dart',
    'turboship.dart',
    'view/all.dart',
    'main_two.dart',
    'core/configs/firebase/all.dart',
]

def get_blacklisted_paths(directory):
    blacklisted_paths = set()
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, directory)
            if 'part of ' in open(file_path).read():
                blacklisted_paths.add(os.path.normpath(relative_path))
    return blacklisted_paths

def search_and_update_all_dart(directory):
    all_file = os.path.join(directory, "all.dart")
    relative_all_file = os.path.relpath(all_file, directory)

    # Normalize paths for better comparison
    normalized_blacklist = [os.path.normpath(item) for item in BLACKLISTED_ALL_DART_FILES]

    if os.path.normpath(relative_all_file) in normalized_blacklist:
        return  # Skip if this all.dart file is blacklisted

    if not os.path.exists(all_file):
        open(all_file, 'a').close()

    blacklist = get_blacklisted_paths(directory)

    for item in os.listdir(directory):
        item_path = os.path.join(directory, item)
        relative_path = os.path.relpath(item_path, directory)

        if os.path.normpath(relative_path) not in blacklist and item != 'all.dart':
            if os.path.isdir(item_path):
                search_and_update_all_dart(item_path)
                subdir_name = os.path.basename(item_path)
                with open(all_file, 'a') as f:
                    f.write(f"export '{subdir_name}/all.dart';\n")
            elif os.path.isfile(item_path) and not any(item.endswith(ext) for ext in IGNORED_EXTENSIONS):
                with open(all_file, 'a') as f:
                    f.write(f"export '{item}';\n")

# Use the current working directory for the target directory
directory_path = 'flutter/lib'
search_and_update_all_dart(directory_path)


# Writing custom content to specific files after generating all.dart
custom_overwrites = {
    'view/content/documents/all.dart': "export 'documents_content.dart'\n    if (dart.library.io) 'mobile.dart'\n    if (dart.library.html) 'web.dart';\n",
    'core/configs/firebase/all.dart': "export 'firebase_config.dart';\nexport 'prod/all.dart';\n",
    'all.dart': "export 'all_two.dart';\nexport 'config/all.dart';\nexport 'core/all.dart';\nexport 'data/all.dart';\nexport 'domain/all.dart';\nexport 'l10n/all.dart';\nexport 'l10n/l10n.dart';\nexport 'main.dart';\nexport 'presentation/all.dart';\nexport 'utils/all.dart';\n",
}

for file_path, content in custom_overwrites.items():
    file_path = os.path.join(directory_path, file_path)
    with open(file_path, 'w') as f:
        f.write(content)


subprocess.run(['dart', 'fix', '--apply', 'flutter/lib'])

