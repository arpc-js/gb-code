import re

filepath = r'c:\Users\kuaxi\Documents\trae_projects\gb-code\src\mock\front.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove trailing whitespace/newlines and ensure file ends with ]
content = content.rstrip()
if not content.endswith(']'):
    content += '\n]\n'

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Added closing bracket')
