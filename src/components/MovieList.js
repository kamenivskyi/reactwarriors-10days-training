import React, { Component } from 'react';
import { moviesData } from '../moviesData';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  state = {
    movies: moviesData
  };

  render() {
    const { movies } = this.state;
    return (
      <div className='row'>
        {movies.map(item => (
          <MovieItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
