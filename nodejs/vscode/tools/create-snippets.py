import os

count = 0

# input from user
sourceFile=input("Please enter sourcefile:\n")
print(f'sourceFile is: {sourceFile}')

destinationFile=input("Please enter destinationFile: \n")
print(f'destinationFile is: {destinationFile}')

prefix=input("Please enter preFix: \n")
print(f'destinationFile is: {prefix}')

description=input("Please enter description: \n")
print(f'destinationFile is: {description}')

# nếu file tồn tại xóa file
if os.path.isfile(f'{destinationFile}'):
    os.remove(f'{destinationFile}')
    print(f'remove file because it is exist: {destinationFile}')
else:
    print(f'{destinationFile} Invalid file')

# check if file exist then delete
if os.path.isfile(f'{sourceFile}'):
    print ("File exist")
    # openfile using readlines
    with open(f'{sourceFile}', encoding = 'utf-8') as fp:
        lines = fp.readlines()
         # viết theo format của snippets file
        f = open(f'{destinationFile}', "a", encoding = 'utf-8')
        f.write('{\n')
        f.write('\t\t\"Print to console\":{\n')
        f.write(f'\t\t\"prefix\":\"{prefix}\",\n')
        f.write('\t\t\"body\":[\n')
        for line in lines:
            count += 1
            # @@@ {} format theo args trong hàm format
            # print("Line{}: {}".format(count, '"'+line.strip()+'"'))
            newLine=line.replace('\"','\'')
            # viết phần body sau khi đã format(bỏ dấu double quote thành single quote)
            if count!=len(lines):
                f.write('\t\t\t"'+newLine.strip()+'",\n')
            else:
                f.write('\t\t\t"'+newLine.strip()+'"\n')
                
        f.write('\t\t],\n')
        f.write(f'\t\t\"description\":\"{description}\"\n')
        f.write('}')
        f.close()        
else:
    print ("Source file not exist")



