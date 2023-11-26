import shutil
import os

destination_root = './backend/'
source_directories = ['./.vscode', './assets', './components', './composables', './content', './layouts',
                      './pages', './plugins', './server',]

for source_dir in source_directories:
    destination_dir = os.path.join(
        destination_root, os.path.basename(source_dir))
    if os.path.exists(destination_dir):
        print('Copied to ', destination_dir)
        shutil.rmtree(destination_dir)

    shutil.copytree(source_dir, destination_dir)

print('Directories copied from source directories to their corresponding destination directories in ./backend/')
