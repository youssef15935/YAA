import React from 'react';
import { Link } from 'react-router-dom';
import Font from 'react-font';

const Header = () => {
  return (
    <header className="flex flex-col items-center p-3 border-gray-200">
      <Link to="/" className="text-3xl font-light mb-2">YAA</Link>
      <Font family="Lato">
        <nav className="flex space-x-4 text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Font>
    </header>
  );
};

export default Header;
