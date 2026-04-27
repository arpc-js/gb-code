import fs from 'fs';
const path = 'c:\\Users\\kuaxi\\Documents\\trae_projects\\gb-code\\src\\mock\\front.ts';
let c = fs.readFileSync(path, 'utf8');

// Find the broken db.exec block with real newlines
const broken = `db.exec('\n  CREATE TABLE IF NOT EXISTS knowledge_bases (id INTEGER PRIMARY KEY, name TEXT, userId INTEGER);\n  CREATE TABLE IF NOT EXISTS documents (id INTEGER PRIMARY KEY, kbId INTEGER, name TEXT, status TEXT);\n  CREATE TABLE IF NOT EXISTS text_chunks (id INTEGER PRIMARY KEY, docId INTEGER, content TEXT);\n  CREATE VIRTUAL TABLE IF NOT EXISTS vec_chunks USING vec0(chunk_embedding float[1536]);\n')`;

const fixed = `db.exec('\\n  CREATE TABLE IF NOT EXISTS knowledge_bases (id INTEGER PRIMARY KEY, name TEXT, userId INTEGER);\\n  CREATE TABLE IF NOT EXISTS documents (id INTEGER PRIMARY KEY, kbId INTEGER, name TEXT, status TEXT);\\n  CREATE TABLE IF NOT EXISTS text_chunks (id INTEGER PRIMARY KEY, docId INTEGER, content TEXT);\\n  CREATE VIRTUAL TABLE IF NOT EXISTS vec_chunks USING vec0(chunk_embedding float[1536]);\\n')`;

c = c.split(broken).join(fixed);

fs.writeFileSync(path, c, 'utf8');
console.log('Fixed db.exec newlines');
