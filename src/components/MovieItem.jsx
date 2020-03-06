import React from 'react';

import ItemImage from './ItemImage';
import Button from './Button';

class MovieItem extends React.Component {
  state = {
    isWillWatch: false
  };

  componentWillUnmount() {
    console.log('unmount');
  }

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
              <Button
                label='Remove willwatch'
                colorType='success'
                onClick={this.toggleWillWatch}
                block
              />
            ) : (
              <Button
                label='Will watch'
                colorType='dark'
                onClick={this.toggleWillWatch}
                block
              />
            )}

            <Button
              label='Delete movie'
              colorType='danger'
              onClick={() => onDeleteMovie(item)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
