import subprocess
import os

# Get the current directory of the Python script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Relative path to your Bash script from the Python script's directory
bash_script_relative_path = 'test.sh'

# Construct the absolute path to the Bash script
bash_script_absolute_path = os.path.join(current_dir, bash_script_relative_path)

# Run the Bash script using subprocess
process = subprocess.Popen(['bash', bash_script_absolute_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# Wait for the process to finish and capture output
stdout, stderr = process.communicate()

# Check the return code
return_code = process.returncode

if return_code == 0:
    print("Script executed successfully!")
    print("Output:")
    print(stdout.decode('utf-8'))  # Decode byte output to string
else:
    print(f"Script execution failed with return code {return_code}")
    print("Error output:")
    print(stderr.decode('utf-8'))  # Decode byte error output to string
