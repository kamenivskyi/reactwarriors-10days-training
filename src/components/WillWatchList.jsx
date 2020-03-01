import React, { Component } from 'react';

export default class WillWatchList extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className='col-3'>
        <ul className='list-group sticky-top'>
          <h5> Will Watch: {list.length} movies</h5>
          {list.map(item => (
            <li className='list-group-item' key={item.id}>
              {item.title} {item.vote_average}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
