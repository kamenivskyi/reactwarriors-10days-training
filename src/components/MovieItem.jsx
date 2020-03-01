import React from 'react';

class MovieItem extends React.Component {
  state = {
    isWillWatch: false
  };

  onAddToWillwatch = () => {
    this.setState(
      () => ({
        isWillWatch: true
      }),
      () => {
        this.props.addToWillWatch(this.props.item);
      }
    );
  };

  onDeleteFromWillwatch = () => {
    this.setState(
      () => ({
        isWillWatch: false
      }),
      () => {
        this.props.deleteFromWillWatch(this.props.item);
      }
    );
  };

  render() {
    const { item, onDeleteMovie, addToWillWatch } = this.props;

    const { title, poster_path, vote_average, id } = item;

    const { isWillWatch } = this.state;

    return (
      <div className='col-sm-6 col-md-4 my-2'>
        <div className='card' style={{ width: '100%' }}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            className='card-img-top'
            alt={title}
          />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>Vote: {vote_average}</p>

            {isWillWatch ? (
              <button
                className='btn btn-success'
                onClick={this.onDeleteFromWillwatch}
              >
                Remove willwatch
              </button>
            ) : (
              <button className='btn btn-dark' onClick={this.onAddToWillwatch}>
                Will watch
              </button>
            )}

            {/* <button
              className='btn btn-danger'
              onClick={() => onDeleteMovie(id)}
            >
              Delete movie
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
