const { get, getAll } = require('./utils');

(async () => {
    console.log(await getAll())
   

    console.log('Get 7: ',await get(7))
})();


