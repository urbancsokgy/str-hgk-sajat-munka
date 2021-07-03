const fsp = require ('fs').promises

const getFile= async (path) => {
    myFile = await fsp.readFile(path)
    .catch((err) => console.error('Failed to read file', err));    
    //console.log(typeof (myFile.toString('utf8')));
    return myFile.toString('utf8')
}

module.exports = getFile