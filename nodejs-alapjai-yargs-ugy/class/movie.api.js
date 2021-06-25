const { readFile, writeFile } = require('fs').promises;

// const MovieApi = (path, prop) => ({
//     async get() {
//         const dataString = await readFile(path);
//         return JSON.parse(dataString)[prop];
//     },

//     async save(data) {
//         await writeFile(path, JSON.stringify({ [prop]: data }));
//     }
// })

module.exports = class MovieAPI {
    constructor(path, prop) {
        this.path = path;
        this.prop = prop;
        this.list = null;
        this.init();
    }

    // './database/movies.json', 'movies'
    async init() {
        const dataString = await readFile(this.path, 'utf8');
        this.list = JSON.parse(dataString)[this.prop];
    }

    async get() {
        if (!this.list) {
            await this.init();
        }

        return this.list;
    }
    async save(data) {
      console.log(data)
         await writeFile(this.path, JSON.stringify({ [this.prop]: data }));
    }
}
