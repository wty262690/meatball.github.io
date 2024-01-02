import os

# folder path
dir_path = r'D://桌面/功課/大肆上/都人工的/AI_HW2/imageCameraImage2'

# list to store files
res = []
i=0
# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        i += 1
        renampath = path.split('.')
        print(renampath[0])
        os. rename(os.path.join(dir_path, path), os.path.join(dir_path, str(renampath[0]) + '.png')) 
        #res.append(renampath[0] + '.png')
#print(res)
#os. rename()