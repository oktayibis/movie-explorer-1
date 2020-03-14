import React from "react";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useEffect, useState} from 'react'
import Actor from './Actor'
import { act } from "react-dom/test-utils";


const baseURL = "http://image.tmdb.org/t/p/w1280/";


const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Movie = ({ match, movies }) => {



  const classes = useStyles();
  console.log(match.params.id);
  console.log(movies);

  const movie = movies.find(m => {
    // console.log(typeof match.params.id)
    return m.id == match.params.id; //for === use parseInt(match.params.id)
  });


  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={baseURL + movie.poster_path}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <div className="actors">
      
      <Actor actor={movie.id} />
{/* {caststate.map(actor => <Actor actor={actor} />)} */}

      </div>
    </div>
  );
};

export default Movie;
