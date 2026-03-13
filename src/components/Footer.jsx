import React from 'react';

const Footer = () => {
  const handleExit = () => {
    window.close();
  };

  return (
    <footer>
      <ul className="nav-links footer-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">View</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <button className="exit-btn" onClick={handleExit}>EXIT</button>
    </footer>
  );
};

export default Footer;