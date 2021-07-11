import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const MovieCard = (props) =>
{
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>You are {props.age} years old</h2>
        </div>
    )
}

ReactDOM.render
(
    <div>
        <MovieCard name= "Michael"  age={40} />
        <MovieCard name= "Abbie" age={25} />
    </div>,
    document.getElementById('root')

)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
