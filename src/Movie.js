import React from "react";
const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";
function Movie(props) {
  // console.log(props.movie);

  return (
   <div className='col-6'>
        <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={BACKDROP_BASE_URL+props.movie.poster_path} className="card-img" alt={props.movie.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <button type="button" className="btn btn-danger btn-sm float-right">{props.movie.vote_average}</button>

            <h5 className="card-title ">{props.movie.title}</h5>
            <p className="card-text text-left">
        {props.movie.overview}
            </p>
         
          </div>
          <button onClick={e=>props.handleMovieID(props.movie.id)} type="button" className="btn btn-info btn-sm float-right">more info</button>
          <p className="card-text">
              <small className="text-muted text-left">release date: {props.movie.release_date}</small>
            </p>
        </div>


      </div>
    </div>
   </div>
  );
  }

export default Movie;
