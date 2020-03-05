import React from 'react';

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

export default Tabs;
