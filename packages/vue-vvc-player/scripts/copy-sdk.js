#!/usr/bin/env node

/**
 * vue-vvc-player postinstall 脚本
 * 自动复制 SDK 文件到项目的 public/sdk 目录
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

// 查找项目根目录（包含 public 文件夹的目录）
function findProjectRoot() {
  let dir = process.cwd();
  
  // 如果当前目录有 public，直接使用
  if (fs.existsSync(path.join(dir, 'public'))) {
    return dir;
  }
  
  // 从脚本位置向上查找
  dir = __dirname;
  for (let i = 0; i < 10; i++) {
    dir = path.dirname(dir);
    if (fs.existsSync(path.join(dir, 'public')) && 
        fs.existsSync(path.join(dir, 'package.json')) &&
        !dir.includes('node_modules')) {
      return dir;
    }
  }
  return null;
}

function copySDK() {
  const sdkSrc = path.join(__dirname, '..', 'sdk');
  const projectRoot = findProjectRoot();
  
  if (!projectRoot) {
    console.log('[vue-vvc-player] 未找到项目根目录，跳过 SDK 复制');
    return;
  }
  
  const targetDir = path.join(projectRoot, 'public', 'sdk');
  
  if (!fs.existsSync(sdkSrc)) {
    console.log('[vue-vvc-player] SDK 源目录不存在');
    return;
  }
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  console.log('[vue-vvc-player] 复制 SDK 文件...');
  let copied = 0;
  for (const file of sdkFiles) {
    const src = path.join(sdkSrc, file);
    const dest = path.join(targetDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      copied++;
    }
  }
  console.log(`[vue-vvc-player] 已复制 ${copied} 个文件到 ${targetDir}`);
}

copySDK();
