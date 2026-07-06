const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walk('src', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Fix data imports (now in same folder for features)
  if (content.includes('../data/activities')) {
    content = content.replace(/\.\.\/data\/activities/g, './activities');
    changed = true;
  }
  if (content.includes('../data/travelInfo')) {
    content = content.replace(/\.\.\/data\/travelInfo/g, './travelInfo');
    changed = true;
  }
  if (content.includes('../data/downloads')) {
    content = content.replace(/\.\.\/data\/downloads/g, './downloads');
    changed = true;
  }
  if (content.includes('../data/destinations')) {
    content = content.replace(/\.\.\/data\/destinations/g, './destinations');
    changed = true;
  }

  // Fix component imports (moved to shared)
  // E.g. in src/features/home/HomePage.tsx, depth is 2, so ../../shared/
  const depth = filePath.split(path.sep).length - 2; // src/features/home/file.tsx -> depth 2
  const upToShared = '../'.repeat(depth) + 'shared/';
  
  if (content.includes('../components/')) {
    content = content.replace(/\.\.\/components\//g, upToShared);
    changed = true;
  }
  
  if (content.includes('../../components/')) {
    content = content.replace(/\.\.\/\.\.\/components\//g, upToShared);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed imports in', filePath);
  }
});
