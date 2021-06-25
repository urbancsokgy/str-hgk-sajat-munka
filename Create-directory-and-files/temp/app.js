const fsPromises = require('fs').promises
const fs = require('fs')
const path = require('path')
const zlib =require('zlib')

const readFile = fs.createReadStream(
    path.join(__dirname, 'config.json')
    ,{encoding: 'utf-8'}
)
const writeFile = fs.createWriteStream(
    path.join(__dirname, 'config.json.bak')
    ,{encoding: 'utf-8'}
)
readFile.pipe(writeFile)


const gzip = zlib.createGzip();

const inp = fs.createReadStream('config.json');
const out = fs.createWriteStream('text.json.gz');
inp.pipe(writeFile)
inp.pipe(gzip).pipe(out);

writeFile.on('finish', () => {
    try {
        if (fs.existsSync('config.json')) {
            console.log(
                'A file OK'
            );
          //file exists
        }
      } catch(err) {
        console.error(err)
      }
    })

