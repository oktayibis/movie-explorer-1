import React, { Component } from "react";

import { Button, Card, } from "react-bootstrap";
import movies from "./data";
import MovieDetails from "./MovieDetails";

const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";
const imgStyle = {
    height: '100%',
  };
const cardStyle = {
    padding : '1%',
    margin : '1%'
}
export default class MovieList extends Component {

    constructor(){
        super()
        this.state = {
            movieID : null
        }
    }
  
    goDetails = (id) =>{
        return <MovieDetails movid={id} />
    }

  render() {
    return (
      <div>
        <Card  style={cardStyle}>
          <Card.Img style={imgStyle} variant="top" src={BACKDROP_BASE_URL+this.props.backdrop_path}/>
          <Card.Body className='bg-dark'>
            <Card.Title className='text-warning' >{this.props.title.toUpperCase()}</Card.Title>
            <Card.Text className='text-light'>
             {this.props.overview}
            </Card.Text>
            <Button onClick={this.props.movid} variant="info">More Detail</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
/**
 *  <Image src={BACKDROP_BASE_URL+this.props.backdrop_path} rounded />
                <h3 className='text-left'>{this.props.title}</h3>
                <p className='text-left'>{this.props.overview}</p>

                 <div>
                 <Image width='100%' src={BACKDROP_BASE_URL+this.props.backdrop_path} rounded />
                <h3>{this.props.title}</h3>
                <p >{this.props.overview} <Button variant="link">More</Button></p>            
               
                </div>
 */
