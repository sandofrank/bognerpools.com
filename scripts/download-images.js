const fs = require('fs');
const https = require('https');
const path = require('path');

// Read all unique URLs from the extracted file
const urls = fs.readFileSync('/tmp/squarespace-urls.txt', 'utf-8')
  .split('\n')
  .filter(url => url.trim());

console.log(`Found ${urls.length} images to download`);

// Create directories
const dirs = ['public/images/hero', 'public/images/gallery', 'public/images/projects', 'public/images/financing'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Mapping object to track old URL -> new path
const mapping = {};
let downloaded = 0;
let errors = 0;

// Function to clean filename
function cleanFilename(url) {
  // Extract filename from URL
  const urlPath = new URL(url).pathname;
  const filename = urlPath.split('/').pop();

  // Decode URL encoding and clean up
  let clean = decodeURIComponent(filename)
    .replace(/%2520/g, '-')
    .replace(/\s+/g, '-')
    .toLowerCase();

  return clean;
}

// Function to categorize image based on context
function categorizeImage(url, filename) {
  // Check which file the URL appears in to determine category
  const grep = require('child_process').execSync(
    `grep -l "${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" app/**/*.tsx 2>/dev/null || echo ""`,
    { encoding: 'utf-8' }
  ).trim();

  if (grep.includes('page.tsx') && grep.includes('app/page.tsx')) {
    return 'hero';
  } else if (grep.includes('gallery')) {
    // Further categorize gallery images
    if (filename.includes('lazy') || filename.includes('casas') || filename.includes('thorson') ||
        filename.includes('jarmon') || filename.includes('spink') || filename.includes('img_')) {
      return 'projects';
    }
    return 'gallery';
  } else if (grep.includes('financing')) {
    return 'financing';
  }

  return 'gallery'; // default
}

// Download function
function downloadImage(url, index) {
  return new Promise((resolve) => {
    const filename = cleanFilename(url);
    const category = categorizeImage(url, filename);
    const filepath = path.join('public/images', category, filename);

    // Skip if already exists
    if (fs.existsSync(filepath)) {
      mapping[url] = `/images/${category}/${filename}`;
      console.log(`[${index + 1}/${urls.length}] Skipped (exists): ${filename}`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          downloaded++;
          mapping[url] = `/images/${category}/${filename}`;
          console.log(`[${index + 1}/${urls.length}] Downloaded: ${filename} -> ${category}/`);
          resolve();
        });
      } else {
        errors++;
        console.error(`[${index + 1}/${urls.length}] Error ${response.statusCode}: ${url}`);
        fs.unlinkSync(filepath);
        resolve();
      }
    }).on('error', (err) => {
      errors++;
      console.error(`[${index + 1}/${urls.length}] Failed: ${err.message}`);
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      resolve();
    });
  });
}

// Download all images sequentially (to avoid overwhelming the server)
async function downloadAll() {
  for (let i = 0; i < urls.length; i++) {
    await downloadImage(urls[i], i);
    // Small delay to be nice to the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Save mapping
  fs.writeFileSync(
    'scripts/image-mapping.json',
    JSON.stringify(mapping, null, 2)
  );

  console.log('\n=== Download Complete ===');
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total: ${urls.length}`);
  console.log(`Mapping saved to: scripts/image-mapping.json`);
}

downloadAll().catch(console.error);
