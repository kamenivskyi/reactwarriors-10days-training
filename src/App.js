import React, { Component } from 'react';
import { moviesData } from './moviesData';

import MovieList from './components/MovieList';

import './App.css';

class App extends Component {
  state = {
    movies: moviesData
  };

  handleDeleteMovie = id => {
    const newArr = this.state.movies.filter(item => item.id !== id);

    this.setState({ movies: newArr });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className='container'>
        <MovieList movies={movies} handleDeleteMovie={this.handleDeleteMovie} />
      </div>
    );
  }
}

export default App;
