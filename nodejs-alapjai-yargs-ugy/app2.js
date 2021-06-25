// npm i
const yargs = require('yargs');
const { id, producer, title } = require('./options');
const MovieService = require('./class/movie.service');
const movieService = new MovieService();

yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
        command: 'getall',
        describe: 'Get all movies',
        handler: async () => {
            console.log( await movieService.getAllMovies() );
        }
    })
    .command({
        command: 'find',
        describe: 'Get one movie',
        builder: { id },
        handler: async (args) => {
            console.log( await movieService.getMovie(args.id) );
        }
    })
    .command({
        command: 'get',
        describe: 'Get one movie',
        builder: { id },
        handler: async (args) => {
            console.log( await movieService.getMovie(args.id) );
        }
    })
    .command({
        command: 'add',
        describe: 'Add one movie',
        builder: { producer, title  },
        handler: async (args) => {
            console.log('-----------------------------------');
            console.log('-----------------------------------');
            console.log(args.producer, args.title);
            await movieService.saveMovie(args.producer, args.title) 
        }
    })
    .command({
        command: 'mod',
        describe: 'Modify one movie',
        builder: { id, producer, title  },
        handler: async (args) => {
            console.log('-----------------------------------');
            console.log('-----------------------------------');
            console.log('Edit movie: ', args.id, args.producer, args.title)
            console.log(args);
            await movieService.modifyMovie(args.id, args.producer, args.title) 
        }
    })
    .command({
        command: 'del',
        describe: 'Delete one movie',
        builder: { id  },
        handler: async (args) => {
            console.log('-----------------------------------');
            console.log('-----------------------------------');
            console.log('Delete movie: ', args.id)
            await movieService.delMovie(args.id) 
        }
    })
    .locale('en')
    .strict()
    .help()
    .parse();