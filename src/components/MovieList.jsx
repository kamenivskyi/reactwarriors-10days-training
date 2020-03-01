import React, { Component } from 'react';

import MovieItem from './MovieItem';

class MovieList extends Component {
  render() {
    const {
      movies,
      handleDeleteMovie,
      deleteFromWillWatch,
      addToWillWatch
    } = this.props;

    return (
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
  }
}

export default MovieList;
