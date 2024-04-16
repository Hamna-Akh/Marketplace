// Layout.js

import React from 'react';
import SideNavigationBar from './SideNavigationBar';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <SideNavigationBar />
        <div style={{ marginLeft: '250px', flexGrow: 1 }}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
