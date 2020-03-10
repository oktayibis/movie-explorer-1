import React from "react";
const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";

const MovieDetail = props => {

  return (
    
    <div className="container">
      <div className="card mb-3">
        <img
          src={BACKDROP_BASE_URL + props.movie.backdrop_path}
          className="card-img-top"
          alt={props.movie.title}
        />
        <div className="card-body">
        <button type="button" className="btn btn-danger btn-sm float-right">Vote Average: {props.movie.vote_average}</button>

          <h5 className="card-title">{props.movie.title}</h5>

          <p className="card-text">
           {props.movie.overview}
          </p>
          <p className="card-text d-flex justify-content-between">
            <small className="text-muted">Release date: {props.movie.release_date}</small>
            <small className="text-muted">Original Language: {props.movie.original_language === "en" ? "English" : props.movie.original_language}</small>
            <small className="text-muted">Original Title: {props.movie.original_title}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

/*
 <div className='container'>
        
            </div>
*/
