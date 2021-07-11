import { useState } from 'react';

export const MovieList = ({ movies })=> {
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        setMovieData(movies.map((movie)) => {
            return {
                showMovieData: false,
                data: movie
            }        
        })
    }, [])


    const logMovieInfo = (movie) => {
        console.log (`${movie.Title}`. movie);
    }
    const renderMovieList = () => (
        movies.map((movie, index) => (
            <div className="movie-card" key={index}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <div>
                <h5></h5>
                <button
                    onClick={() => logMovieInfo(movie)}
                >Log Movie</button>
                </div>
            </div>
        )),
    );

    return (
        <div className="movie-list-container">
            { console.log(movieData)}
            { renderMovieList() }
        </div>
    
    )
}
