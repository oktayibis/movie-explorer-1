import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import movies from "./data";
import MovieList from "./MovieList";
import Container from "react-bootstrap/Container";
import { Row, Col, Navbar } from "react-bootstrap";

export default class App extends React.Component {
  render() {
    console.log(movies);
    const renderMovie = movieList => {
      return movieList.results.map(m => {
        return (
          <Col sm={6}>
            <MovieList
              key={m.id}
              title={m.title}
              overview={m.overview}
              backdrop_path={m.backdrop_path}
              
            />
          </Col>
        );
      });
    };
    return (
      <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">The Movie Database</Navbar.Brand>
      </Navbar>
  
   
        <Row>{renderMovie(movies)}</Row>
      </Container>
    );
  }
}

// export default App;
