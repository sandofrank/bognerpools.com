const fs = require('fs');
const path = require('path');

// Mapping of old filenames to new short, consistent names
const renameMap = {
  // Hero
  'hero/casas-30_2.jpg': 'hero/hero.jpg',

  // Gallery - single word names, no numbers
  'gallery/bellmeyer-1_2.jpg': 'gallery/bellmeyer.jpg',
  'gallery/boone-13_2.jpg': 'gallery/boone.jpg',
  'gallery/casas-2_2.jpg': 'gallery/casas-02.jpg',
  'gallery/casas-30_2.jpg': 'gallery/casas-30.jpg',
  'gallery/casas-39_2.jpg': 'gallery/casas-39.jpg',
  'gallery/casas-47_2.jpg': 'gallery/casas-47.jpg',
  'gallery/clemens-18_2.jpg': 'gallery/clemens.jpg',
  'gallery/dikinson-2_2.jpg': 'gallery/dikinson-02.jpg',
  'gallery/dikinson-3_2.jpg': 'gallery/dikinson-03.jpg',
  'gallery/duro-13_2.jpg': 'gallery/duro.jpg',
  'gallery/eyler-14_2.jpg': 'gallery/eyler.jpg',
  'gallery/gallery-4.21.22-04.jpg': 'gallery/modern-01.jpg',
  'gallery/gallery-4.21.22-18.jpg': 'gallery/modern-02.jpg',
  'gallery/gallery-4.21.22-21.jpg': 'gallery/modern-03.jpg',
  'gallery/howard-2_2.jpg': 'gallery/howard.jpg',
  'gallery/image-asset.jpeg': 'gallery/asset.jpeg',
  'gallery/kira-11_2.jpg': 'gallery/kira.jpg',
  'gallery/koontz-4_2.jpg': 'gallery/koontz.jpg',
  'gallery/logo.png': 'gallery/logo.png',
  'gallery/moss-hawarden-2_2.jpg': 'gallery/moss.jpg',
  'gallery/nicholson-1_2.jpg': 'gallery/nicholson.jpg',
  'gallery/peb-tec-black-pearl_2.jpg': 'gallery/pearl.jpg',
  'gallery/pool-only-6_2.jpg': 'gallery/pool.jpg',
  'gallery/real-rock-5_2.jpg': 'gallery/rock.jpg',
  'gallery/rimmer-19_2.jpg': 'gallery/rimmer.jpg',
  'gallery/soholt-10_2.jpg': 'gallery/soholt.jpg',
  'gallery/tietz-6_2.jpg': 'gallery/tietz.jpg',
  'gallery/wilson-spa-only-02_2.jpg': 'gallery/wilson.jpg',

  // Projects - Casas (Pool with a View) - standardize to 2-digit
  'projects/casas-2_2.jpg': 'projects/casas-02.jpg',
  'projects/casas-39_2.jpg': 'projects/casas-39.jpg',
  'projects/casas-47_2.jpg': 'projects/casas-47.jpg',
  'projects/casas-1.jpg': 'projects/casas-01.jpg',
  'projects/casas-2.jpg': 'projects/casas-02.jpg',
  'projects/casas-3.jpg': 'projects/casas-03.jpg',
  'projects/casas-4.jpg': 'projects/casas-04.jpg',
  'projects/casas-5.jpg': 'projects/casas-05.jpg',
  'projects/casas-6.jpg': 'projects/casas-06.jpg',
  'projects/casas-7.jpg': 'projects/casas-07.jpg',
  'projects/casas-8.jpg': 'projects/casas-08.jpg',
  'projects/casas-9.jpg': 'projects/casas-09.jpg',
  // casas-10 through casas-24 are already correctly named

  // Projects - Thorson (Compact Design) - standardize to 2-digit
  'projects/thorson-1.jpg': 'projects/thorson-01.jpg',
  'projects/thorson-2.jpg': 'projects/thorson-02.jpg',
  'projects/thorson-3.jpg': 'projects/thorson-03.jpg',
  'projects/thorson-4.jpg': 'projects/thorson-04.jpg',
  'projects/thorson-5.jpg': 'projects/thorson-05.jpg',
  'projects/thorson-6.jpg': 'projects/thorson-06.jpg',
  'projects/thorson-7.jpg': 'projects/thorson-07.jpg',
  'projects/thorson-8.jpg': 'projects/thorson-08.jpg',
  'projects/thorson-9.jpg': 'projects/thorson-09.jpg',
  // thorson-10, 11, 12 are already correctly named

  // Projects - Lazy River - already correct (lazyriv-01 through lazyriv-53)

  // Projects - Lap Pool (Stunning Lap Pool) - rename img_7XXX to lap-XX
  'projects/img_7142_2.jpg': 'projects/lap-01.jpg',
  'projects/img_7143_2.jpg': 'projects/lap-02.jpg',
  'projects/img_7144_2.jpg': 'projects/lap-03.jpg',
  'projects/img_7146_2.jpg': 'projects/lap-04.jpg',
  'projects/img_7147_2.jpg': 'projects/lap-05.jpg',
  'projects/img_7148_2.jpg': 'projects/lap-06.jpg',
  'projects/img_7149_2.jpg': 'projects/lap-07.jpg',
  'projects/img_7151_2.jpg': 'projects/lap-08.jpg',
  'projects/img_7153_2.jpg': 'projects/lap-09.jpg',
  'projects/img_7155_2.jpg': 'projects/lap-10.jpg',
  'projects/img_7156_2.jpg': 'projects/lap-11.jpg',
  'projects/img_7157_2.jpg': 'projects/lap-12.jpg',
  'projects/img_7159_2.jpg': 'projects/lap-13.jpg',
  'projects/img_7161_2.jpg': 'projects/lap-14.jpg',
  'projects/img_7162_2.jpg': 'projects/lap-15.jpg',
  'projects/img_7163_2.jpg': 'projects/lap-16.jpg',
  'projects/img_7164_2.jpg': 'projects/lap-17.jpg',
  'projects/img_7165_2.jpg': 'projects/lap-18.jpg',
  'projects/image-asset.jpeg': 'projects/lap-19.jpeg',

  // Projects - Vanishing Edge - rename img_06XX to edge-XX
  'projects/img_0614.jpg': 'projects/edge-01.jpg',
  'projects/img_0617.jpg': 'projects/edge-02.jpg',
  'projects/img_0618.jpg': 'projects/edge-03.jpg',
  'projects/img_0638.jpg': 'projects/edge-04.jpg',
  'projects/img_0640.jpg': 'projects/edge-05.jpg',
  'projects/img_0652.jpg': 'projects/edge-06.jpg',
  'projects/img_0655.jpg': 'projects/edge-07.jpg',
  'projects/img_0663.jpg': 'projects/edge-08.jpg',
  'projects/img_0664.jpg': 'projects/edge-09.jpg',
  'projects/img_0665.jpg': 'projects/edge-10.jpg',

  // Projects - Bells and Whistles - rename image-XX to bells-XX
  'projects/image-09.jpg': 'projects/bells-01.jpg',
  'projects/image-14.jpg': 'projects/bells-02.jpg',
  'projects/image-22.jpg': 'projects/bells-03.jpg',
  'projects/image-28.jpg': 'projects/bells-04.jpg',
  'projects/image-29.jpg': 'projects/bells-05.jpg',
  'projects/image-32.jpg': 'projects/bells-06.jpg',
  'projects/image-35.jpg': 'projects/bells-07.jpg',
  'projects/image-38.jpg': 'projects/bells-08.jpg',
  'projects/image-49.jpg': 'projects/bells-09.jpg',
  'projects/image-58.jpg': 'projects/bells-10.jpg',
  'projects/image-65.jpg': 'projects/bells-11.jpg',
  'projects/image-66.jpg': 'projects/bells-12.jpg',
  'projects/image-69.jpg': 'projects/bells-13.jpg',
  'projects/image-76.jpg': 'projects/bells-14.jpg',
  'projects/image-77.jpg': 'projects/bells-15.jpg',
  'projects/image-79.jpg': 'projects/bells-16.jpg',
  'projects/image-81.jpg': 'projects/bells-17.jpg',
  'projects/image-83.jpg': 'projects/bells-18.jpg',
  'projects/image-102.jpg': 'projects/bells-19.jpg',
  'projects/image-109.jpg': 'projects/bells-20.jpg',
  'projects/image-110.jpg': 'projects/bells-21.jpg',
  'projects/image-132.jpg': 'projects/bells-22.jpg',
  'projects/image-133.jpg': 'projects/bells-23.jpg',
  'projects/image-140.jpg': 'projects/bells-24.jpg',

  // Jarmon and Spink already have correct naming (jarmon-01, spink-01, etc)

  // Financing
  'financing/blasneck-13_2.jpg': 'financing/blasneck.jpg',
};

console.log(`Created rename mapping for ${Object.keys(renameMap).length} files`);

// Perform renames
let renamed = 0;
let skipped = 0;
let errors = 0;

Object.entries(renameMap).forEach(([oldPath, newPath]) => {
  const oldFullPath = path.join('public/images', oldPath);
  const newFullPath = path.join('public/images', newPath);

  if (!fs.existsSync(oldFullPath)) {
    console.log(`Skip (not found): ${oldPath}`);
    skipped++;
    return;
  }

  if (fs.existsSync(newFullPath) && oldFullPath !== newFullPath) {
    console.log(`Skip (target exists): ${oldPath} -> ${newPath}`);
    skipped++;
    return;
  }

  try {
    fs.renameSync(oldFullPath, newFullPath);
    console.log(`✓ Renamed: ${oldPath} -> ${newPath}`);
    renamed++;
  } catch (err) {
    console.error(`✗ Error: ${oldPath} - ${err.message}`);
    errors++;
  }
});

// Save the mapping for code updates
const codeUpdateMap = {};
Object.entries(renameMap).forEach(([oldPath, newPath]) => {
  codeUpdateMap[`/images/${oldPath}`] = `/images/${newPath}`;
});

fs.writeFileSync(
  'scripts/rename-mapping.json',
  JSON.stringify(codeUpdateMap, null, 2)
);

console.log('\n=== Rename Complete ===');
console.log(`Renamed: ${renamed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors}`);
console.log(`Mapping saved to: scripts/rename-mapping.json`);
