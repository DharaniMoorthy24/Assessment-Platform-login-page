import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="user-profile">
        <span>D</span>
      </div>
    </header>
  );
};

export default Header;
