import React from 'react';

const MovieItem = ({
  item: { title, poster_path, vote_average, id },
  onDeleteMovie
}) => {
  return (
    <div className='col-md-4 my-2'>
      <div className='card' style={{ width: '18rem' }}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          className='card-img-top'
          alt={title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>Vote: {vote_average}</p>
          <button className='btn btn-danger' onClick={() => onDeleteMovie(id)}>
            Delete movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
