import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = ({ tabs, tabSelected, handleSelectTab }) => (
  <nav className='nav nav-pills nav-fill py-2'>
    {tabs.map(tab => (
      <Tab
        info={tab}
        handleSelectTab={handleSelectTab}
        key={tab.query}
        tabSelected={tabSelected}
      />
    ))}
  </nav>
);

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabSelected: PropTypes.string.isRequired,
  handleSelectTab: PropTypes.func.isRequired
};

export default Tabs;
