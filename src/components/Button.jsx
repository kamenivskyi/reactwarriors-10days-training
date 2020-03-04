import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, label, block, colorType, ...rest }) => {
  let blockStyles = '';

  if (block) {
    blockStyles = { display: 'block', marginBottom: '20px' };
  } else {
    blockStyles = {};
  }

  const classes = `btn btn-${colorType}`;

  return (
    <button type={type} className={classes} style={blockStyles} {...rest}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  label: 'button',
  colorType: 'primary',
  block: false
};

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  type: PropTypes.string,
  block: PropTypes.bool
};

export default Button;
