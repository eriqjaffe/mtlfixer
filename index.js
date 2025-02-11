const fs = require('fs');
const path = require('path');

const filePath = path.join("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Out of the Park Baseball 26\\data\\ballparks\\models\\Momentum Bank Ballpark", 'Momentum Bank Ballpark.mtl')
const backupPath = filePath + '.bak'; // Creates a backup with ".bak" extension

const replacements = [
  
  {
    pattern: /newmtl seating_attendance4_blue\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance4_blue\.jpg/g,
    replacement: `newmtl seating_attendance4_blue
Ka 0.000000 0.000000 0.000000
Kd 0.380392 0.384314 0.364706
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity4_blue.jpg`
  },
  {
    pattern: /newmtl seating_attendance3_blue\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance3_blue\.jpg/g,
    replacement: `newmtl seating_attendance3_blue
Ka 0.000000 0.000000 0.000000
Kd 0.364706 0.376471 0.352941
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity3_blue.jpg`
  },
];

fs.copyFile(filePath, backupPath, (err) => {
  if (err) {
      console.error('Error creating backup:', err);
      return;
  }
  console.log('Backup created:', backupPath);

  // Read the file after backup
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          return;
      }

      // Apply all replacements
      let updatedContent = data;
      for (const { pattern, replacement } of replacements) {
          updatedContent = updatedContent.replace(pattern, replacement);
      }

      // Write the updated content back to the file
      fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
              console.error('Error writing file:', err);
          } else {
              console.log('File updated successfully.');
          }
      });
  });
});