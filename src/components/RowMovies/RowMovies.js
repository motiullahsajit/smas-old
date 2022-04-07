import React from 'react';
import './RowMovies.css'
import MovieCard from '../MovieCard/MovieCard';

const RowMovies = ({ title, movies }) => {
  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {
          movies.map((m) => <MovieCard imgUrl={m.imgUrl} movieUrl={m.movieUrl} />)
        }
      </div>
    </section>
  );
};

export default RowMovies;