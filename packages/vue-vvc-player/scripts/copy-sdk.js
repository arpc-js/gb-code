#!/usr/bin/env node

/**
 * vue-vvc-player 安装后脚本
 * 自动复制 SDK 资源到项目的 public/sdk 目录
 */

const fs = require('fs');
const path = require('path');

const sdkFiles = [
  'VVCPlayer.mjs',
  'decoderWorker.js',
  'vvdecapp.js',
  'vvdecapp.wasm',
  'vvdecapp.worker.js',
  'mp4box.all.min.js',
  'AsyncHelpers.js',
];

function copySDK(targetDir) {
  const srcDir = path.join(__dirname, '..', 'sdk');
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  let copied = 0;
  for (const file of sdkFiles) {
    const src = path.join(srcDir, file);
    const dest = path.join(targetDir, file);
    
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      copied++;
      console.log(`  ✓ ${file}`);
    } else {
      console.warn(`  ✗ ${file} (not found)`);
    }
  }
  
  console.log(`\n复制完成: ${copied}/${sdkFiles.length} 个文件`);
}

// CLI
const args = process.argv.slice(2);
const targetDir = args[0] || './public/sdk';

console.log(`\n📦 vue-vvc-player SDK 安装\n`);
console.log(`目标目录: ${path.resolve(targetDir)}\n`);

copySDK(targetDir);

console.log(`
✅ 安装完成!

使用方法:
  import { VvcPlayer } from 'vue-vvc-player';

  <VvcPlayer 
    src="video.mp4"
    width="800"
    height="450"
    :show-controls="true"
  />
`);
