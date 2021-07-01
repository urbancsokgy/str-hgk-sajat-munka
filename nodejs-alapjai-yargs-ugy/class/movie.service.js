const { array } = require('yargs');
const MovieAPI = require('./movie.api');


module.exports = class MovieService {
    constructor() {
        this.api = new MovieAPI('./database/movies.json', 'movies');
        this.movies = null;
        this.init();
    }

    async generateNewMovieId() {
        let movies = await this.getAllMovies()
        const sortedMovies = [...movies].sort((a, b) => a.id > b.id);
        return sortedMovies[sortedMovies.length - 1].id + 1
    }
    async init() {
        this.movies = await this.api.get();
    }

    async getAllMovies() {
        if (!this.movies) {
            await this.init();
        }

        return this.movies;
    }

    async getMovie(id) {
        if (!this.movies) {
            await this.init();
        }

        return this.movies.filter(
            movie => movie.id === id
        )[0];
    }

    async saveMovie(producer, title) {
        let id = await this.generateNewMovieId()
        const movie = { id, producer, title }
        this.movies = [...this.movies, movie]
        console.log(this.movies);
        await this.api.save(this.movies);
        return this.movie;
    }
    async modifyMovie(id, producer, title) {
        //const movie = { id, producer, title } 
        if (!this.movies) {
            await this.init();
        }
        this.movies = await this.movies.map(movie => movie.id === id
            ? { id, producer, title }
            : movie)
        
        await this.api.save(this.movies);
        return this.movies;
    }
    async delMovie(id) {
        if (!this.movies) {
            await this.init();
        }
        this.movies = await this.movies.filter(movie => movie.id !== id)

        await this.api.save(this.movies);
        return this.movie;
    }

}