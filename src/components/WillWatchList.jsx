import React from 'react';
import PropTypes from 'prop-types';

const WillWatchList = ({ list }) => (
  <div className='col-3'>
    <ul className='list-group sticky-top'>
      <h5> Will Watch: {list.length} movies</h5>

      {list.map(({ title, vote_average, id }) => (
        <li className='list-group-item' key={id}>
          {title} <span className='ml-auto'>Rating: {vote_average}</span>
        </li>
      ))}
    </ul>
  </div>
);

WillWatchList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      vote_average: PropTypes.string
    })
  )
};

export default WillWatchList;
