let myMovieList;
let myMovie;
const myApiKey = '379060c8';
const fetchMovieDataByName = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${myApiKey}`);
    return response.json();
}
const fetchMovieDataById = async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${myApiKey}`);
    return response.json();
}
const getMovieList = async () => {
    myMovieList = await fetchMovieDataByName("john wick");
}
myMovieList = fetchMovieDataByName('john wick');
myMovie = fetchMovieDataById("tt6146586");
console.log(myMovieList);
console.log(myMovie);