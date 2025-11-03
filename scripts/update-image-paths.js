const fs = require('fs');
const path = require('path');
const glob = require('child_process').execSync;

// Load the mapping
const mapping = JSON.parse(fs.readFileSync('scripts/image-mapping.json', 'utf-8'));

console.log(`Loaded ${Object.keys(mapping).length} image mappings`);

// Get all TypeScript/TSX files in app directory
const files = glob('find app -name "*.tsx" -o -name "*.ts"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(f => f);

console.log(`Found ${files.length} files to update\n`);

let totalReplacements = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let replacements = 0;
  let originalContent = content;

  // Replace each Squarespace URL with local path
  Object.entries(mapping).forEach(([oldUrl, newPath]) => {
    const escaped = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    const matches = (content.match(regex) || []).length;

    if (matches > 0) {
      content = content.replace(regex, newPath);
      replacements += matches;
    }
  });

  if (replacements > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ ${filePath}: ${replacements} replacements`);
    totalReplacements += replacements;
  }
});

console.log(`\n=== Update Complete ===`);
console.log(`Total replacements: ${totalReplacements}`);
console.log(`Files modified: ${files.filter(f => {
  const content = fs.readFileSync(f, 'utf-8');
  return !Object.keys(mapping).every(url => !content.includes(url));
}).length}`);
