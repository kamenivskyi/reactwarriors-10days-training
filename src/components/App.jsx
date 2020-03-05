import React, { Component } from 'react';

import Tabs from './Tabs';
import MovieList from './MovieList';
import WillWatchList from './WillWatchList';

import { getData } from '../services/api/getData';
import { API_KEY } from '../services/api/config';

class App extends Component {
  state = {
    tabs: [
      { label: 'Now playing', query: 'now_playing' },
      { label: 'Upcoming', query: 'upcoming' },
      { label: 'Popular', query: 'popular' },
      { label: 'Top rated', query: 'top_rated' }
    ],
    movies: [],
    moviesWillWatch: [],
    tabSelected: 'now_playing',
    loading: false
  };

  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.tabSelected !== this.state.tabSelected) {
      this.updateMovies();
    }
  }

  updateMovies = () => {
    this.setState({ loading: true });
    getData(
      `movie/${this.state.tabSelected}?api_key=${API_KEY}&language=en-US&page=1`
    ).then(({ results }) => this.setState({ movies: results, loading: false }));
  };

  handleSelectTab = query => {
    this.setState({ tabSelected: query });
  };

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
    const { movies, moviesWillWatch, tabs, tabSelected, loading } = this.state;

    return (
      <div className='container-fluid'>
        <div className='pt-4'>
          <Tabs
            tabs={tabs}
            handleSelectTab={this.handleSelectTab}
            tabSelected={tabSelected}
          />
          <div className='row'>
            {loading ? (
              <h4 className='text-center w-100'>Loading..</h4>
            ) : (
              <>
                <MovieList
                  movies={movies}
                  handleDeleteMovie={this.handleDeleteMovie}
                  deleteFromWillWatch={this.deleteFromWillWatch}
                  addToWillWatch={this.addToWillWatch}
                />
                <WillWatchList list={moviesWillWatch} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
