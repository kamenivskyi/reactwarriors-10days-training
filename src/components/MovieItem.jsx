import React from 'react';
import ItemImage from './ItemImage';

class MovieItem extends React.Component {
  state = {
    isWillWatch: false
  };

  toggleWillWatch = () => {
    const { item, deleteFromWillWatch, addToWillWatch } = this.props;

    this.setState(({ isWillWatch }) => ({
      isWillWatch: !isWillWatch
    }));

    this.state.isWillWatch ? deleteFromWillWatch(item) : addToWillWatch(item);
  };

  render() {
    const {
      item: { title, poster_path, vote_average, backdrop_path },
      onDeleteMovie,
      item
    } = this.props;

    const { isWillWatch } = this.state;

    return (
      <div className='col-sm-6 col-md-4 my-2'>
        <div className='card' style={{ width: '100%' }}>
          <ItemImage src={backdrop_path || poster_path} alt={title} />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>Rating: {vote_average}</p>

            {isWillWatch ? (
              <button
                className='btn btn-success'
                onClick={this.toggleWillWatch}
                style={{ display: 'block', marginBottom: '20px' }}
              >
                Remove willwatch
              </button>
            ) : (
              <button className='btn btn-dark' onClick={this.toggleWillWatch}>
                Will watch
              </button>
            )}

            <button
              className='btn btn-danger'
              onClick={() => onDeleteMovie(item)}
            >
              Delete movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
