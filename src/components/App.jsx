import React, { PureComponent } from 'react';

import Tabs from './Tabs';
import MovieList from './MovieList';
import WillWatchList from './WillWatchList';
import Pagination from './Pagination';

import { getData } from '../services/api/getData';
import { API_KEY } from '../services/api/config';
import { tabs } from '../services/tabsList';

class App extends PureComponent {
  state = {
    movies: [],
    moviesWillWatch: [],
    allData: {},
    tabSelected: 'revenue.desc',
    pageSelected: 1,
    minVote: '5000',
    loading: false,
    error: false
  };

  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.tabSelected !== this.state.tabSelected ||
      prevState.pageSelected !== this.state.pageSelected
    ) {
      this.updateMovies();
    }
  }

  updateMovies = () => {
    const { pageSelected, tabSelected, minVote } = this.state;

    this.setState({ loading: true });
    getData(
      `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${tabSelected}&include_adult=false&include_video=false&page=${pageSelected}&vote_count.gte=${minVote}`
    )
      .then(data =>
        this.setState({ movies: data.results, loading: false, allData: data })
      )
      .catch(err => this.setState({ error: true }));
  };

  handleSelectTab = query => this.setState({ tabSelected: query });

  handleDeleteMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    this.deleteFromWillWatch(movie);

    this.setState({ movies: updateMovies });
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ pageSelected: page });
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
    const {
      movies,
      moviesWillWatch,
      allData,
      tabSelected,
      loading,
      error
    } = this.state;

    const { total_pages, page } = allData;

    if (error) {
      return <h4>Oops! Something has gone wrong!</h4>;
    }

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
          <Pagination
            currentPage={page}
            totalPages={total_pages}
            handlePageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
