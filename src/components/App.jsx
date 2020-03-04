import React, { Component } from 'react';

import MovieList from './MovieList';
import WillWatchList from './WillWatchList';

import { moviesData } from '../moviesData';

class App extends Component {
  state = {
    movies: moviesData,
    moviesWillWatch: []
  };

  handleDeleteMovie = id => {
    const newArr = this.state.movies.filter(item => item.id !== id);

    this.setState({ movies: newArr });
  };

  addToWillWatch = movie => {
    const updateMovies = [...this.state.moviesWillWatch, movie];

    this.setState({ moviesWillWatch: updateMovies });
  };

  deleteFromWillWatch = movie => {
    const updateMovies = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );

    this.setState({ moviesWillWatch: updateMovies });
  };

  render() {
    const { movies, moviesWillWatch } = this.state;

    return (
      <div className='container-fluid'>
        <div className='row pt-4'>
          <MovieList
            movies={movies}
            handleDeleteMovie={this.handleDeleteMovie}
            deleteFromWillWatch={this.deleteFromWillWatch}
            addToWillWatch={this.addToWillWatch}
          />
          <WillWatchList list={moviesWillWatch} />
        </div>
      </div>
    );
  }
}

export default App;
