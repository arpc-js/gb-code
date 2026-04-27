import fs from 'fs';
const path = 'c:\\Users\\kuaxi\\Documents\\trae_projects\\gb-code\\src\\mock\\front.ts';
const aiPath = 'c:\\Users\\kuaxi\\Documents\\trae_projects\\gb-code\\new_ai_course.txt';
let c = fs.readFileSync(path, 'utf8');
let newAi = fs.readFileSync(aiPath, 'utf8');

// Find AI course start
const aiStart = c.indexOf('  {\n    "id": "ai-practice"');
const frontEnd = c.indexOf(']\n', aiStart);

c = c.substring(0, aiStart) + newAi;

fs.writeFileSync(path, c, 'utf8');
console.log('AI课程已更新');
