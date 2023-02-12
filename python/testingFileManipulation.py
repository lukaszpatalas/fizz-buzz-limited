import os
import shutil

# Main folders
main_folder_1 = r"D:\Lukasz Patalas\MainFolder1"
main_folder_2 = r"D:\Lukasz Patalas\MainFolder2"

# Minor folders
minor_folder_1 = "/MinorFolder1"
minor_folder_2 = "/MinorFolder2"

# Create the main folders if not already

if not os.path.exists(main_folder_1):
    os.makedirs(main_folder_1)

if not os.path.exists(main_folder_2):
    os.makedirs(main_folder_2)

# Create the minor folders in the main folders if not already there

if not os.path.exists(main_folder_1 + minor_folder_1):
    os.makedirs(main_folder_1 + minor_folder_1)

if not os.path.exists(main_folder_1 + minor_folder_2):
    os.makedirs(main_folder_1 + minor_folder_2)

if not os.path.exists(main_folder_2 + minor_folder_1):
    os.makedirs(main_folder_2 + minor_folder_1)

if not os.path.exists(main_folder_2 + minor_folder_2):
    os.makedirs(main_folder_2 + minor_folder_2)

# Populate a specific minor folder with a file

def populate_folder(folder_path):
    os.startfile(folder_path)

# Delete a specific file within a specific minor folder

def delete_file(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)
    else:
        print("Error: The file does not exist."
)

# Change a specific file within a specific minor folder

def change_file(current_file_path, new_file_path):
    if  os.path.exists(current_file_path):
        if not os.path.exists(new_file_path):
            shutil.move(current_file_path, new_file_path)
        else:
            print("Error: The new file already exists.")
    else:
        print("Error: The current file does not exist.")