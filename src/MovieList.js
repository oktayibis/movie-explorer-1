import React, { Component } from 'react'
const BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";

export default class MovieList extends Component {
    render() {
        
        return (
            
            <div>
            <img className='img-right' src={BACKDROP_BASE_URL+this.props.backdrop_path}></img>
                <h3 className='text-left'>{this.props.title}</h3>
                <p className='text-left'>{this.props.overview}</p>
                <p>Add List </p>
            </div>
        )
    }
}
