import React, { PureComponent } from 'react';

import Button from './Button';

export default class Pagination extends PureComponent {
  state = {
    currentPage: 1
  };

  plus = 'plus';
  minus = 'minus';

  componentDidUpdate(_, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.props.handlePageChange(currentPage);
    }
  }

  onChange = operation => {
    const { currentPage } = this.state;

    if (operation === this.plus) {
      this.setState({ currentPage: currentPage + 1 });
    } else if (operation === this.minus) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  render() {
    const { totalPages } = this.props;

    const { currentPage } = this.state;

    return (
      <div className='btn-group d-block text-center'>
        <Button
          onClick={() => this.onChange(this.minus)}
          disabled={currentPage === 1 && true}
        >
          Previous
        </Button>
        <Button colorType='dark' disabled>
          Page: {currentPage} of {totalPages}
        </Button>
        <Button
          onClick={() => this.onChange(this.plus)}
          disabled={currentPage === totalPages && true}
        >
          Next
        </Button>
      </div>
    );
  }
}
