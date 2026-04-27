import fs from 'fs';
const path = 'c:\\Users\\kuaxi\\Documents\\trae_projects\\gb-code\\src\\mock\\front.ts';
let c = fs.readFileSync(path, 'utf8');

const aiStart = c.indexOf('  {\n    "id": "ai-practice"');

const newAi = JSON.stringify(`{PLACEHOLDER}`);

// Instead of one big string, let me build it piece by piece
// First find where the AI course ends
const aiBracket = c.indexOf('{', aiStart);
let depth = 0;
let aiEnd = aiStart;
for (let i = aiBracket; i < c.length; i++) {
  if (c.charAt(i) === '{') depth++;
  if (c.charAt(i) === '}') {
    depth--;
    if (depth === 0) {
      aiEnd = i + 1;
      break;
    }
  }
}

// Read the template from a separate file
const template = fs.readFileSync('c:\\Users\\kuaxi\\Documents\\trae_projects\\gb-code\\ai_template.json', 'utf8');

c = c.substring(0, aiStart) + template;

fs.writeFileSync(path, c, 'utf8');
console.log('AI课程已重构');
