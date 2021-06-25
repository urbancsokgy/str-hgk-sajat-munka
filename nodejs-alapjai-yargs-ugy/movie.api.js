const { readFileSync, writeFileSync } = require('fs');
const { readFile, writeFile } = require('fs').promises;

const MovieApi = (path, prop) => ({
    async get() {
        const dataString = await readFile(path);
        return JSON.parse(dataString)[prop];
    },

    async save(data) {
        await writeFile(path, JSON.stringify({ [prop]: data }));
    }
})

module.exports = class  MovieApi{
    constructor(path, prop){
        this.path=path;
        this.prop=prop;
        this.init;
        this.list=null;
    }
    async init(){
        const dataString = await readFile(this.path);
        return JSON.parse(dataString)[this.prop];
    }
    async get(){
        if(!this.list){
            await this.init();
        }
        return this.list;
    }
    async save(data) {
        await writeFile(this.path, JSON.stringify({ [prop]: data }));
    }
}
