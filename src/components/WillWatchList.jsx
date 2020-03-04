import React, { Component } from 'react';

class WillWatchList extends Component {
  render() {
    const { list } = this.props;

    return (
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
  }
}

export default WillWatchList;
