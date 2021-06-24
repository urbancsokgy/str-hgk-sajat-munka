const fs = require('fs')
//const path = './input.txt'

const delFile = (path) => {
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err)
        return
      }
    
      //file removed
    })    
}
module.exports = delFile