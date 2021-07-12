import {
    useState,
    useEffect
} from 'react';
import MovieService from '../services/movie.service';

export const MovieList = () => {
    const [movieData, setMovieData] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const movieService = new MovieService();

    useEffect(() => {
        getMoviesByTitle('John Wick');
    },[] )

    const getMoviesByTitle = async (title) => {
        const movieList = await movieService.getMoviesByTile(title);

        setMovieData(movieList.Search);
    }

    const getMovieById = async (id) => {
        const movie = await movieService.getMovieById(id);

        setSelectedMovie(movie);
    }


    const logMovieInfo = (id) => {
        getMovieById(id);

        console.log("SelectedMovie", selectedMovie);
    }

    const renderMovieList = () => (
        movieData.map((movie, index) => ( 
            <div className="movie-card" key={index} >
              <img src={movie.Poster} alt={ `${movie.Title} poster` } />
             <h4 style={{color: "Blue"}}>{movie.Title}</h4>
             <button className = "button" onClick={ () => logMovieInfo(movie.imdbID)}>show details</button>
            </div>
        ))
    );


    return (
        <div className = "movie-list-container"> 
            <h1>Movie List</h1>
            { console.log(movieData) }
            { movieData && renderMovieList() }
        </div>
    )
}