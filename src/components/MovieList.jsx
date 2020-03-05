import React from 'react';

import MovieItem from './MovieItem';

const MovieList = ({
  movies,
  handleDeleteMovie,
  deleteFromWillWatch,
  addToWillWatch
}) => (
  <div className='col-9'>
    <div className='row'>
      {movies.map(item => (
        <MovieItem
          item={item}
          onDeleteMovie={handleDeleteMovie}
          deleteFromWillWatch={deleteFromWillWatch}
          addToWillWatch={addToWillWatch}
          key={item.id}
        />
      ))}
    </div>
  </div>
);

export default MovieList;
