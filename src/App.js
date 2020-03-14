import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import MovieDetail from "./MovieDetail";
import { Router, Route } from "react-router-dom";

const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=542003918769df50083a13c415bbc602&language=en-US&page=1
`;

export default class App extends React.Component {
  state = {
    movieList: [],
    query: "",
    movie: null
  };

  componentDidMount() {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          movieList: data.results
        });
      });
  }

  handleSearch = e => {
    e.preventDefault();
    const API_QUERY = `https://api.themoviedb.org/3/search/movie?api_key=542003918769df50083a13c415bbc602&language=en-US&query=${this.state.query}&page=1&include_adult=false`;

    fetch(API_QUERY)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          movieList: data.results
        });
      });
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleMovieID = id => {
    this.setState({
      movie: this.state.movieList.find(m => m.id === id)
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <Router>
          <Route
           exact path="/"
            render={() => (
              <MovieList
                handleMovieID={this.handleMovieID}
                list={this.state.movieList}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

// export default App;
/*
{this.state.movie ===null ? <MovieList handleMovieID={this.handleMovieID} list={this.state.movieList} /> : <MovieDetail movie={this.state.movie} />} */
