import fs from 'fs';
const path = 'c:\\Users\\kuaxi\\Documents\\trae_projects\\gb-code\\src\\mock\\front.ts';
let c = fs.readFileSync(path, 'utf8');

// Replace the RAG implementation line by line using direct string matching
// Find the old langchain-based code
const oldPattern = `"code": "import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai'`;
const oldEnd = `"\\n})\\n\\nconsole.log(response.content)"`;

const startIdx = c.indexOf(oldPattern);
if (startIdx === -1) {
  console.log('Could not find langchain code');
  process.exit(1);
}

// Find the end - look for the closing quote after console.log
let endIdx = c.indexOf(oldEnd, startIdx);
if (endIdx === -1) {
  console.log('Could not find end');
  process.exit(1);
}
endIdx += oldEnd.length;

// Build new code using String.raw to avoid backtick issues
const newCode = `<template>\n  <view>\n    <!-- v-model 双向绑定 -->\n    <input v-model="message" placeholder="请输入">\n    <p>你输入的：{{ message }}</p>\n    \n    <!-- v-bind 绑定属性 -->\n    <img :src="imageUrl" :class="{ large: isLarge }">\n    \n    <!-- v-on 绑定事件 -->\n    <button @click="count++">点击: {{ count }}</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('')\nconst imageUrl = ref('https://via.placeholder.com/150')\nconst isLarge = ref(true)\nconst count = ref(0)\n</script>\n\n<style scoped>\n.large { width: 200px; height: 200px; }\n</style>`;

// Actually let me just do the replacement manually
const newRAGCode = `import Database from 'better-sqlite3'\nimport { vec } from 'sqlite-vec'\nimport OpenAI from 'openai'\n\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })\n\n// 1. 获取文本向量 (调用Embedding API)\nasync function getEmbedding(text) {\n  const res = await openai.embeddings.create({\n    model: 'text-embedding-3-small',\n    input: text\n  })\n  return res.data[0].embedding // 返回1536维向量数组 (用于相似度计算)\n}\n\n// 2. 存储到sqlite-vec (轻量级向量数据库，零配置)\nconst db = new Database('english.db')\nvec.load(db)\ndb.exec('CREATE TABLE IF NOT EXISTS texts (id INTEGER PRIMARY KEY, content TEXT)')\ndb.exec('CREATE VIRTUAL TABLE IF NOT EXISTS vec_texts USING vec0(content_embedding float[1536])')\n\n// 3. 插入文档片段并存储向量 (批量向量化)\nconst documents = ['Apple is a red or green fruit', 'Python is a programming language']\nconst insertStmt = db.prepare('INSERT INTO texts (content) VALUES (?)')\nconst insertVecStmt = db.prepare('INSERT INTO vec_texts (rowid, content_embedding) VALUES (?, ?)')\n\nfor (const doc of documents) {\n  const { lastInsertRowid } = insertStmt.run(doc)\n  const vec = await getEmbedding(doc)\n  insertVecStmt.run(lastInsertRowid, new Float32Array(vec)) // 转为Float32Array\n}\n\n// 4. 余弦相似度搜索 (查询时向量化，查找最相似的前K条)\nconst queryVec = await getEmbedding('What color is an apple?')\nconst results = db.prepare('SELECT rowid, distance FROM vec_texts WHERE content_embedding MATCH ? ORDER BY distance LIMIT 2').all(new Float32Array(queryVec))\n\nconsole.log('最相关片段:', results)`;

// Also fix the text splitter
const oldSplitter = `"code": "import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'\n\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 1000,\n  chunkOverlap: 200\n})\n\nconst docs = await splitter.createDocuments([\n  'This is a long English reading passage...'\n])\n\nconsole.log('分割为 ' + docs.length + ' 个片段')\ndocs.forEach((doc, i) => {\n  console.log('片段' + (i+1) + ': ' + doc.pageContent.substring(0, 50))\n})"`;

const newSplitter = `"code": "// 简单按段落分割文档，保留语义完整性 (手动实现即可)\nconst text = fs.readFileSync('article.txt', 'utf8')\n\n// 按段落分割 (按两个换行符)\nconst chunks = text.split('\\n\\n')\n  .map(p => p.trim())\n  .filter(p => p.length > 50) // 过滤太短的段落 (50字符以上)\n\n// 合并小段，控制每块大小在500-1000字符 (避免太小)\nconst documents = []\nlet current = ''\nfor (const chunk of chunks) {\n  if ((current + chunk).length > 800) {\n    documents.push(current.trim())\n    current = chunk\n  } else {\n    current += '\\n' + chunk\n  }\n}\nif (current) documents.push(current.trim())\n\nconsole.log('分割为 ' + documents.length + ' 个片段')\ndocuments.forEach((doc, i) => {\n  console.log('片段' + (i+1) + ': ' + doc.substring(0, 50) + '...')\n})"`;

c = c.split(oldSplitter).join(newSplitter);

// Now replace the langchain RAG with sqlite-vec version
const oldRAGFull = c.substring(startIdx, endIdx);
const newRAGFull = `"code": "${newRAGCode}"`;

c = c.replace(oldRAGFull, newRAGFull);

fs.writeFileSync(path, c, 'utf8');
console.log('RAG替换完成');
