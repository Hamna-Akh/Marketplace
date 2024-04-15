// Layout.js

import React from 'react';
import SideNavigationBar from './SideNavigationBar';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <SideNavigationBar />
      <div style={{ marginLeft: '250px', flexGrow: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
