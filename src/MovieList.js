import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Button} from 'react-bootstrap';

const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";

  

export default class MovieList extends Component {
    render() {
        
        return (
            
    
             <div>
                 <Image width='100%' src={BACKDROP_BASE_URL+this.props.backdrop_path} rounded />
                <h3>{this.props.title}</h3>
                <p >{this.props.overview} <Button variant="link">More</Button></p>            
               
                </div>
      

        )
    }
}
/**
 *  <Image src={BACKDROP_BASE_URL+this.props.backdrop_path} rounded />
                <h3 className='text-left'>{this.props.title}</h3>
                <p className='text-left'>{this.props.overview}</p>
 */