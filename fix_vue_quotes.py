import re

filepath = r'c:\Users\kuaxi\Documents\trae_projects\gb-code\src\mock\front.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# The file contains \\" (two backslashes + double quote) in Vue code blocks
# TypeScript parses \\ as escaped backslash, then " ends the string
# Fix: replace \\" with ' (single quote) for HTML attributes

# Replace patterns like class=\\"value\\" with class='value'
# The \\" pattern in the file is: 0x5c 0x5c 0x22

# Strategy: replace all \\" with ' in the content
# This is safe because \\" only appears in Vue/HTML attribute contexts
content = content.replace('\\\\"', "'")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed all \\" patterns in Vue code blocks')
