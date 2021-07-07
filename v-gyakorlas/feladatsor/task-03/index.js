const { update } = require('./utils');

(async () => {
    console.log(await update(
        {
            id: 1,
            model: 'Fabia',
            maker: 'Skoda',
            year: 2005,
            color: 'orange',
            price: 22277
          }
    ));
})();