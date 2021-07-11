
import { MovieList } from "./components/movie"

export const App = () => {

  const movies = [{ "Title":"John Wick","Year":"2014","imdbID":"tt2911666","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"},{"Title":"John Wick: Chapter 2","Year":"2017","imdbID":"tt4425200","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"},{"Title":"John Wick: Chapter 3 - Parabellum","Year":"2019","imdbID":"tt6146586","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"},{"Title":"John Wick Chapter 2: Wick-vizzed","Year":"2017","imdbID":"tt7161870","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2I0YWM3Y2EtYzU1YS00MWE1LTg0YjUtNWQ2YTBjZWQ5Mzc1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"John Wick: Kill Count","Year":"2017","imdbID":"tt7161942","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjcyM2UzMGQtYzkzYy00MGQ3LWE0MTAtNjIzNzk5MTBhNGQ3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"John Wick: The Assassin's Code","Year":"2015","imdbID":"tt5278698","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmQyNDM5OWEtMTliMS00MDIzLWJlZDAtZDYwNTg2YzJkNzFlXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"John Wick: Car Fu Ride-Along","Year":"2017","imdbID":"tt7161902","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzllZGEwODUtZDE1ZS00ODA4LTljNTItZjRiMzI2NGNhMjg3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Retro Wick: Exploring the Unexpected Success of 'John Wick'","Year":"2017","imdbID":"tt7161846","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTZiMGM5MjItY2VjMi00NmE0LWFlMDItYjA4MzEzMjI4Y2Y2XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"},{"Title":"Training 'John Wick'","Year":"2017","imdbID":"tt7161856","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzk0MGFlZGMtYTk4ZS00MDFiLWJhNDAtODhmYWI2NmNhZDU4XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"},{"Title":"As Above, So Below: The Underworld of 'John Wick'","Year":"2017","imdbID":"tt7161894","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmM2YmY2MzgtZTViNC00NGQxLWE5ZjEtNjFjZmUxZTBkN2Q1XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"}];

  console.log(movies)
  return (<MovieList movies={ movies } />
 )
}



export default App;
