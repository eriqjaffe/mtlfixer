const fs = require('fs');
const path = require('path');
const fileName = process.argv[2];

if (!fileName) {
    console.error("Usage: mtlfix <filename>");
    process.exit(1);
}

// Resolve to an absolute path
const filePath = path.resolve(fileName);
const dirPath = path.dirname(filePath);
console.log("Resolved file path:", filePath);
console.log("dirname:", dirPath)

//const filePath = path.join(__dirname, "mtlfix.mtl")
const backupPath = filePath + '.bak'; // Creates a backup with ".bak" extension

const replacements = [
  // BLUE
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
  {
    pattern: /newmtl seating_attendance2_blue\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance2_blue\.jpg/g,
    replacement: `newmtl seating_attendance2_blue
Ka 0.000000 0.000000 0.000000
Kd 0.345098 0.380392 0.415686
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity2_blue.jpg`
  },
  {
    pattern: /newmtl seating_attendance1_blue\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance1_blue\.jpg/g,
    replacement: `newmtl seating_attendance1_blue
Ka 0.000000 0.000000 0.000000
Kd 0.309804 0.360784 0.419608
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity1_blue.jpg`
  },

  // RED
  {
    pattern: /newmtl seating_attendance4_red\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance4_red\.jpg/g,
    replacement: `newmtl seating_attendance4_red
Ka 0.000000 0.000000 0.000000
Kd 0.380392 0.384314 0.364706
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity4_red.jpg`
  },
  {
    pattern: /newmtl seating_attendance3_red\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance3_red\.jpg/g,
    replacement: `newmtl seating_attendance3_red
Ka 0.000000 0.000000 0.000000
Kd 0.364706 0.376471 0.352941
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity3_red.jpg`
  },
  {
    pattern: /newmtl seating_attendance2_red\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance2_red\.jpg/g,
    replacement: `newmtl seating_attendance2_red
Ka 0.000000 0.000000 0.000000
Kd 0.345098 0.380392 0.415686
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity2_red.jpg`
  },
  {
    pattern: /newmtl seating_attendance1_red\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance1_red\.jpg/g,
    replacement: `newmtl seating_attendance1_red
Ka 0.000000 0.000000 0.000000
Kd 0.309804 0.360784 0.419608
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity1_red.jpg`
  },

  // GRAY
  {
    pattern: /newmtl seating_attendance4_grey\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance4_grey\.jpg/g,
    replacement: `newmtl seating_attendance4_grey
Ka 0.000000 0.000000 0.000000
Kd 0.380392 0.384314 0.364706
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity4_grey.jpg`
  },
  {
    pattern: /newmtl seating_attendance3_grey\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance3_grey\.jpg/g,
    replacement: `newmtl seating_attendance3_grey
Ka 0.000000 0.000000 0.000000
Kd 0.364706 0.376471 0.352941
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity3_grey.jpg`
  },
  {
    pattern: /newmtl seating_attendance2_grey\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance2_grey\.jpg/g,
    replacement: `newmtl seating_attendance2_grey
Ka 0.000000 0.000000 0.000000
Kd 0.345098 0.380392 0.415686
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity2_grey.jpg`
  },
  {
    pattern: /newmtl seating_attendance1_grey\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*seating_attendance1_grey\.jpg/g,
    replacement: `newmtl seating_attendance1_grey
Ka 0.000000 0.000000 0.000000
Kd 0.309804 0.360784 0.419608
Ks 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity1_grey.jpg`
  },

  // GREEN
  {
    pattern: /newmtl crowd_new_4\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*crowd_new_4\.png/g,
    replacement: `newmtl crowd_new_4
Ka 0.000000 0.000000 0.000000
Kd 0.380392 0.384314 0.364706
Ks 0.000000 0.000000 0.000000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity4.jpg`
  },
  {
    pattern: /newmtl Crowd_new_3\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*Crowd_new_3\.png/g,
    replacement: `newmtl Crowd_new_3
Ka 0.000000 0.000000 0.000000
Kd 0.364706 0.376471 0.352941
Ks 0.000000 0.000000 0.000000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity3.jpg`
  },
  {
    pattern: /newmtl crowd_new_2\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*crowd_new_2\.png/g,
    replacement: `newmtl crowd_new_2
Ka 0.000000 0.000000 0.000000
Kd 0.321569 0.360784 0.309804
Ks 0.000000 0.000000 0.000000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity2.jpg`
  },
  {
    pattern: /newmtl crowd_new_1\s+Ka [\d. ]+\s+Kd [\d. ]+\s+Ks [\d. ]+([\s\S]*?)map_Kd .*crowd_new_1\.png/g,
    replacement: `newmtl crowd_new_1
Ka 0.000000 0.000000 0.000000
Kd 0.286275 0.349020 0.274510
Ks 0.000000 0.000000 0.000000
Ke 0.000000 0.000000 0.000000
Ni 1.000000
d 1.000000
illum 1
map_Kd ../../attendance/seating_popularity1.jpg`
  }
];

let reps = 0;

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
      let modifiedLines = []; // Array to store modified lines
      let reps = 0;

      for (const { pattern, replacement } of replacements) {
          let sepLines = replacement.split(/\r?\n|\r|\n/g);
          if (pattern.test(updatedContent)) {
              updatedContent = updatedContent.replace(pattern, replacement);
              console.log("REPLACED: "+sepLines[0]);
              reps++
          } 
      }

      updatedContent = updatedContent.replace(/(.*?_day)\.jpg/g, (match, p1) => {
        let newLine = p1 + ".png";
        modifiedLines.push(dirPath+"\\"+p1.slice(7)+".jpg"); // Store modified line
        reps++;
        return newLine;
      });

      console.log(modifiedLines)

      // Write the updated content back to the file
      fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
              console.error('Error writing file:', err);
          } else {
              console.log('File updated successfully.');
              console.log(reps +" total replacements made")
          }
      });
  });
});