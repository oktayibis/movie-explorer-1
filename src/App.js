import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import movies from "./data";
import MovieList from "./MovieList";
import HeaderNavBar from './HeaderNavBar'
import { Row, Col, Container} from "react-bootstrap";
import MovieDetails from "./MovieDetails";

export default class App extends React.Component {
 state = {
   movieID : null,
   isClicked : false
 };
 getDetails = id =>{
  this.setState({
    movieID : id,
    isClicked :true
  })

}
  render() {
    
    //console.log(movies);
   
    const renderMovie = movieList => {
      return movieList.results.map(m => {
        return (
          <Col sm={6}>
            <MovieList
              key={m.id}
              title={m.title}
              overview={m.overview}
              backdrop_path={m.backdrop_path}
              movid = {()=>this.getDetails(m.id)}
            />
          </Col>
        );
      });
    };

   

    if(this.state.isClicked === false){

      return (
        <Container>
       <HeaderNavBar />
        <Row>{renderMovie(movies)}</Row>
        </Container>
      );
    } else {
      return (
        <MovieDetails id={this.state.movieID} />
      )
    }
   
  }
}

// export default App;
