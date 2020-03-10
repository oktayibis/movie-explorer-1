import React from "react";
import Movie from "./Movie";

export const MovieList = props => {
    console.log(props.list);
    
  const renderList = list => {
    return list.map(movie => {
      return (
       <Movie handleMovieID={props.handleMovieID} key={movie.id} movie={movie} ></Movie>
      );
    });
  };

  return (
   <div className='container-fluid'>
          <div className='row'>
      {renderList(props.list)}
  </div>
   </div>
  )
};

export default MovieList