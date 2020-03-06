import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({ info: { label, query }, tabSelected, handleSelectTab }) => {
  const onTabSelected = e => {
    e.preventDefault();
    handleSelectTab(query);
  };

  const classes = classNames('nav-item nav-link', {
    active: tabSelected === query
  });

  return (
    <a className={classes} href='#' onClick={onTabSelected}>
      {label}
    </a>
  );
};

Tab.propTypes = {
  info: PropTypes.shape({
    label: PropTypes.string,
    query: PropTypes.string
  }),
  tabSelected: PropTypes.string,
  handleSelectTab: PropTypes.func
};

export default Tab;
