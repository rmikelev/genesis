export default class MovieService {
    async getMoviesByTile(title) {
        const apiKey = '379060c8';
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);

        return response.json();
    }

    async getMovieById(id) {
        const apiKey = '379060c8';
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);

        return response.json();
    }
}