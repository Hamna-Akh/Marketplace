// Footer.js

import React from 'react';


function Footer() {
  return (
    <footer style={{ backgroundColor: '#96d7ff', textAlign: 'center', padding: '20px 0' }}>
    <p>&copy; {new Date().getFullYear()} Marketplace. All rights reserved.</p>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginBottom: '10px', textAlign: 'center' }}>Developers:</p>
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center'}}>
          <li><a href="https://www.linkedin.com/in/gillesties/" target="_blank" rel="noopener noreferrer">Gilles Isaac Tiesse</a></li>
          <li><a href="https://www.linkedin.com/in/ada-andrei-478b911a1/" target="_blank" rel="noopener noreferrer">Ada Andrei</a></li>
          <li><a href="https://www.linkedin.com/in/hamna-akhter/" target="_blank" rel="noopener noreferrer">Hamna Akhter</a></li>
        </ul>
      </div>
    </footer>
  );
}



export default Footer;
