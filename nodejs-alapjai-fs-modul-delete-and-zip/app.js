const { createReadStream, createWriteStream, unlink } = require('fs');
const { Transform, pipeline } = require('stream');
const path = require('path');
const { createGzip } = require('zlib')

// Oszály a transzformáláshoz.
class TitleCaseStream extends Transform {
    constructor() {
        super();
    }

    // A _transform metódus felel az átalakításért.
    _transform(chunk, enc, done) {
        // A chunk.toString azért kell, mert Buffert kapunk, ami nem 
        // karaktereket, hanem bájtokat tartalmaz.
        const output = chunk.toString('utf8').split(' ')
            .map(word => {
                return `${word[0].toUpperCase()}${word.slice(1)}`;
            })
            .join(' ');
        this.push(output);
        console.log(output);
        done();
    };
}

class JsonStream extends Transform {
    constructor() {
        super();
    }

    // A _transform metódus felel az átalakításért.
    _transform(chunk, enc, done) {
        // A chunk.toString azért kell, mert Buffert kapunk, ami nem 
        // karaktereket, hanem bájtokat tartalmaz.
        const output = JSON.stringify( { data: chunk.toString('utf8') } );
        this.push(output);
        console.log(output);
        done();
    };
}
const myRead = createReadStream(
    path.join(__dirname,'sourcefile.txt'), 'utf-8'
    )

const rStream = createReadStream(
    path.join(__dirname, 'sourceFile.txt'),
    {
        encoding: 'utf8',
        highWaterMark: 512 * 1024
    }
);

const wStream = createWriteStream(
    path.join(__dirname, 'targetFile.txt'),
    'utf8'
);

wStream.on('finish', () => {
    console.log('File transform successful.');
});


rStream.pipe(new TitleCaseStream()).pipe(new JsonStream()).pipe(wStream);
const gzip = createGzip();
const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.bak.gz');
const delFile = require('./app2')
// fájl törlése
const deleteMyFile =(path)=>{
     unlink(path, (err) => {
    if (err) {
      console.error(err)
      return
    }  
    console.log('file removed')
  })}
// file tömörítése 
pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log('Zip succes');
  // törlés hívása
  //deleteMyFile('./input.txt')
  delFile('./input.txt')
});
