export const movieDetails = ({ movie }) => {
    const {
        Title,
        Rated,
        Type,
        imdbID,
        Runtime,
        Genre,
        Plot,
        Actors,
        imdbRating
    } = movie;

    return(
        <div className="movie-details-container">
            <h2 style ={{ color:"red"}}>Details</h2>
            <div className="information-container">
                <div className="title-container">
                    <h2>{Title}</h2>
                    <span>{imdbRating}</span>
                </div>
                <div className="button-container">
                        <div className="button">{ Rated }</div>
                        <div className="button">{ Runtime }</div>
                        <div className="button">{ Genre }</div>
                </div>
                <div className="description-container">
                    <h3>Plot</h3>
                    <p>{Plot}</p>
                </div>
                <div className="description-container">
                    <h3>Actors</h3>
                    <p>{ Actors } </p>
                </div>
            </div>
        </div>
    );
};