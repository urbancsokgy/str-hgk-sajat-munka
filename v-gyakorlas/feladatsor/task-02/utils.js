const fsp = require('fs').promises
const path = require('path')

const jsonPath= path.join(__dirname, 'db', 'cars.json')


const readFromFile= async () => {
   const content =await fsp.readFile(jsonPath, 'utf8')
   //console.log(JSON.parse(content));
   return JSON.parse(content)
}

// let list = readFromFile()
const get=async(id=0) => {
    // Vagy return list.find(data=>data.id==id)
    list=await getAll()
    return list.filter(data => data.id ==id)    
}

const getAll=async () => {
 const list=await readFromFile()
 //console.log(await readFromFile());
 return list
    
}


module.exports=Object.freeze({
    get,
    getAll,    
})