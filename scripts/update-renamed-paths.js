const fs = require('fs');
const path = require('path');
const glob = require('child_process').execSync;

// Load the rename mapping
const mapping = JSON.parse(fs.readFileSync('scripts/rename-mapping.json', 'utf-8'));

console.log(`Loaded ${Object.keys(mapping).length} rename mappings`);

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

  // Replace each old path with new path
  Object.entries(mapping).forEach(([oldPath, newPath]) => {
    if (oldPath === newPath) return; // Skip if same

    const escaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
