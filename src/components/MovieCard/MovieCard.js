import React from 'react';
import './MovieCard.css';

const MovieCard = ({ imgUrl, movieUrl }) => {
  return (
    <a href={movieUrl} target="_blank">
      <img className="row__posterLarge" src={imgUrl} />
    </a>
  );
};

export default MovieCard;