const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\U S E R\\.gemini\\antigravity\\brain\\7a91e03b-70f7-49a1-be77-f72b70a30b9b\\.user_uploaded';

const mapping = [
  { src: 'media_1790665466086.webp', dest: 'ring-classic-diamond.webp' },
  { src: 'media_1790665472441.webp', dest: 'necklace-gold-pendant.webp' },
  { src: 'media_1790665479705.webp', dest: 'bracelet-elegance-tennis.webp' },
  { src: 'media_1790665486706.webp', dest: 'earrings-pearl-drop.webp' },
  { src: 'media_1790665493236.webp', dest: 'ring-royal-sapphire.webp' },
];

const targetDirs = [
  path.join(__dirname, 'images'),
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'src', 'images'),
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

mapping.forEach(item => {
  const srcFile = path.join(srcDir, item.src);
  if (!fs.existsSync(srcFile)) {
    console.error('Missing source file:', srcFile);
    return;
  }
  targetDirs.forEach(dir => {
    fs.copyFileSync(srcFile, path.join(dir, item.dest));
  });
  console.log(`Copied ${item.src} -> ${item.dest}`);
});
