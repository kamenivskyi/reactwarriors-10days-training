import React from 'react';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  deleteFromWillWatch: PropTypes.func.isRequired,
  addToWillWatch: PropTypes.func.isRequired
};

export default MovieList;
