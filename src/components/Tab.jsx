import React from 'react';
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
    <>
      <a className={classes} href='#' onClick={onTabSelected}>
        {label}
      </a>
    </>
  );
};

export default Tab;
