// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', justifyContent: 'center' }}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
