filepath = r'c:\Users\kuaxi\Documents\trae_projects\gb-code\src\mock\front.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix: replace \\n with \n and \\t with \t (double backslashes to single)
content = content.replace('\\\\n', '\\n')
content = content.replace('\\\\t', '\\t')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed all double backslashes')
