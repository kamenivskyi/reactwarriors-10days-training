import React, { Component } from 'react';

import MovieItem from './MovieItem';

export default class MovieList extends Component {
  render() {
    const { movies, handleDeleteMovie } = this.props;

    return (
      <div className='row'>
        {movies.map(item => (
          <MovieItem
            item={item}
            key={item.id}
            onDeleteMovie={handleDeleteMovie}
          />
        ))}
      </div>
    );
  }
}
