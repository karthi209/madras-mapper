import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {

  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of the selected item

  const handleItemClick = (item) => {
    console.log('Clicked item:', item);
    setSelectedItem(item); // Update the selected item state
  };

  return (
    <>
      <div className="logotext">madras mapper.</div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className={selectedItem === 'blog' ? 'selected' : ''} onClick={() => handleItemClick('blog')}>
            <Link to="/">Blog</Link>
          </li>
          <li className={selectedItem === 'maps' ? 'selected' : ''} onClick={() => handleItemClick('maps')}>
            <Link to="/maps">Maps</Link>
          </li>
          <li className={selectedItem === 'about' ? 'selected' : ''} onClick={() => handleItemClick('about')}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>

  );
};

export default Navbar;