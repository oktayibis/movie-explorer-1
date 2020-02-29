import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class App extends React.Component {
  render() {
    console.log(movies)
    const renderMovie = (movieList) => {
      return movieList.results.map(m => {
        return (
        <div >
          <MovieList key={m.id} title={m.title} overview ={m.overview} backdrop_path={m.backdrop_path} />
        </div>
        );
      })
    }
    return (
      <div className="Card">
        <header className="App-header">
        {renderMovie(movies)}
        </header>
      </div>

     
    );
  }
}

// export default App;
