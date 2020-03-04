import React, { Component } from 'react';

import MovieList from './MovieList';
import WillWatchList from './WillWatchList';

import { getData } from '../services/api/getData';
import { API_KEY } from '../services/api/config';

class App extends Component {
  state = {
    movies: [],
    moviesWillWatch: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    getData(
      `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then(({ results }) => this.setState({ movies: results, loading: false }));
  }

  handleDeleteMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    this.deleteFromWillWatch(movie);

    this.setState({ movies: updateMovies });
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
    const { movies, moviesWillWatch, loading } = this.state;

    if (loading) {
      return <h2>Loading..</h2>;
    }

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
