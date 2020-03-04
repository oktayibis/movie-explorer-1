import React, { Component } from "react";
import movies from "./data";
const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";

export default class MovieDetails extends Component {
  renderDetails = movieList => {
    return movieList.results.find(movie => {
      return movie.id === this.props.id;
    });
  };

  render() {
    const clickedMovie = this.renderDetails(movies);
    return (
      <div className='pb-5'>
        <h1 className="text-center pt-3 text-success display-3">
          {clickedMovie.title}
        </h1>
        <div className="d-flex justify-content-between">
          <img
            className="d-inline rounded"
            src={BACKDROP_BASE_URL + clickedMovie.backdrop_path}
          ></img>
          <div className="container d-inline align-self-center">
          
            <p className="d-inline align-self-center">
              <span className="blockquote text-warning"> Overview</span>{" "}
              <hr className="bg-light"></hr>
              {clickedMovie.overview}
            </p>

            <div className='d-flex justify-content-between mt-5'>
              <button  className="btn btn-info">
              Vote average: <span className="badge badge-light">{clickedMovie.vote_average}</span>
              </button>
              <button  className="btn btn-light">
              Release Date: <span className="badge badge-light">{clickedMovie.release_date}</span>
              </button>

              <br></br>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

//{BACKDROP_BASE_URL+clickedMovie.backdrop_path}
