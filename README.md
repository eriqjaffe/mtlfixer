A simple command-line tool to modify .mtl files to add the animated crowds for OOTP Baseball custom stadiums, and handle _day and _night images.

Requires node.js and yarn to be accessible along the system path.

```
git clone https://github.com/eriqjaffe/mtlfixer && cd mtlfixer
yarn
cd /path/to/mtlfile  
node ./path/to/script/index.js mtlfile.mtl (optional --night)
```

What the script does:

* Create a backup of the mtl file.
* Parse the mtl file and replace matching text blocks with the corresponding 3d audience texture block.
* Any texture files that end in "_day.jpg" will be converted to png format (which is required OOTP), the jpg will be deleted and the mtl file updated accordingly.
* Optionally create corresponding "_night" files for any "_day" files.  **This will overwrite any _night files that already exist in the textures folder!**
* Write the updated mtl file.
