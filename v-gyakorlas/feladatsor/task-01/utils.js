const fsp = require('fs').promises
const get=(list=[], id=0) => {
    // Vagy return list.find(data=>data.id==id)

    return list.filter(data => data.id ==id)

    
}
const create=(list=[],entity={}) => {
    const id=list[list.length-1].id+1
    //entity.id=id
    //list.push(entity)
    const newEntity={...entity, id}
    list.push(newEntity)
    console.log('Az új entitás: ', newEntity);
    writeTofile(list)
   return newEntity
    
}
const getAll= (list=[]) => {
 //console.log(list); 
 return list
    
}
const update=(list=[], entity={}, id=0) => {
   // from Cserkó
   if(list.length<1 || !entity.id){
       return false
   }
   const index=list.findIndex(item =>item.id==entity.id)
   list[index]={...list[index], ...entity}
   
   return list[index]
    // if(id===0){id=entity.id
    //     console.log("update id:", id);
    // }
    // let oldData=list.filter(data => data.id ==id)
    // objIndex = list.findIndex((obj => obj.id == id))
    // let newData=entity
    // newData.id=id
    // list[objIndex]=newData
    // console.log('Ez az update tartalma', newData);
    // writeTofile(list)
    // return list    
}
const remove =(list=[],id=0) => {
    // From Cserkó
    if(list.length<1 || !id){
        return false
    }
    const index=list.findIndex(item =>item.id==id)
    list.splice(index, 1)
    return true
    // objIndex = list.findIndex((obj => obj.id == id))
    // if(objIndex<0){
    //     console.log('Az adat nem található')
    //     return }
    // deletedObject=list[objIndex]
    // list.splice(objIndex, 1 )
    // writeTofile(list)
    // return console.log('A törölt elem indexe', id, 'A törölt elem: ', deletedObject );
   
}
const writeTofile= async (list) => {
    await fsp.writeFile('./adatok.txt', JSON.stringify(list, null, " "))
}
module.exports=Object.freeze({
    get,
    getAll,
    create,
    update,
    remove
})