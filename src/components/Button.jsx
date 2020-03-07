import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ type, children, block, colorType, className, ...rest }) => {
  let blockStyles = '';

  if (block) {
    blockStyles = { display: 'block', marginBottom: '20px' };
  } else {
    blockStyles = {};
  }

  const classes = classNames('btn', className, { [`btn-${colorType}`]: true });

  return (
    <button type={type} className={classes} style={blockStyles} {...rest}>
      {children}
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
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  type: PropTypes.string,
  block: PropTypes.bool
};

export default Button;
