const fs = require("fs")

const createDirectory=(path) => {
    if (!fs.existsSync(path)){
          fs.mkdir(path, function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log("New directory successfully created.")
          }
        })
    }
        
}
const dirs  = ['controllers', 'routers', 'views']
dirs.forEach(element => {
    createDirectory(element)
});
// createDirectory('./controllers')
// createDirectory('./routers')
// createDirectory('./views')

const createMyFile = (filename) => {
    fs.writeFile(filename, '//Learn Node FS module', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });    
}
createMyFile('controllers/site.controller.js')
createMyFile('routers/site.router.js')
createMyFile('views/index.html')
createMyFile('app2.js')
// Create Parent Directories
/* fs.mkdir("./files/a/new-directory-name", { recursive: true }, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("New directory successfully created.")
    }
}) */
