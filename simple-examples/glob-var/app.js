const fs = require('fs')
// global variables function(__dirname, __filename, module, require, exports) 
console.log(__dirname);
console.log('--------------------');
fs.mkdir(`${__dirname}/tmp`, { recursive: true }, (err) => {
    if (err) throw err;
  });
console.log(__filename);
console.log('--------------------');
console.log(module);
console.log('--------------------');
console.log(require);
console.log('--------------------');
console.log(exports);
console.log('--------------------');
