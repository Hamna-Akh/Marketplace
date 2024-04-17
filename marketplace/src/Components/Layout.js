// Layout.js

import React from 'react';
import SideNavBar from './SideNavBar';
import Footer from './Footer';
import backgroundImage from './BackgroundImage.jpg';

function Layout({ children }) {
  return (
    <div style={{
    backgroundImage: `url(${backgroundImage})`,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh' }}>

      <div style={{ flexGrow: 1 }}>
        <SideNavBar />
        <div style={{ marginLeft: '250px', flexGrow: 1 }}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
