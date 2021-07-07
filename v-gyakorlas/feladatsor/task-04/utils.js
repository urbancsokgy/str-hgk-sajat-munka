const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'db', 'cars.json');

const getList = async () => {
    const content = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(content); // string -> array
};

const saveList = async (list = []) => {
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8');
    return true;
};
const remove = async(id) => {
    const list = await getList();
    const index=list.findIndex(item =>item.id==id)
    console.log("Törlésre", list[index]);
    list.splice(index, 1)
    //let modList=list.filter(item=>item.id!=id)
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8');
    return true
}

const update = async (entity = {}) => {
    const list = await getList();

    const index = list.findIndex( item => item.id === entity.id );
    list[index] = {...list[index], ...entity};
    
    await saveList(list);
    
    return list[index];
};
const get=async(id=0) => {
    // Vagy return list.find(data=>data.id==id)
    list=await getList()
    return list.filter(data => data.id ==id)    
}

module.exports = {
    update,
    get,
    remove,
    getList
};