import React from 'react';
import PropTypes from 'prop-types';

import { API_IMAGE_MEDIUM } from '../services/api/config';

const ItemImage = ({ src, alt, ...rest }) => {
  let source = null;

  if (src) {
    source = `${API_IMAGE_MEDIUM}${src}`;
  } else {
    source = 'https://via.placeholder.com/200x100/';
  }

  return <img src={source} className='card-img-top' alt={alt} {...rest} />;
};

ItemImage.defaultProps = {
  alt: 'image'
};

ItemImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default ItemImage;
