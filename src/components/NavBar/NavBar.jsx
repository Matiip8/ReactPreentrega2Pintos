import React from 'react';
import logo from './assets/logo.png';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo-navbar" />
        </div>

        <div className="nav-links">
          <NavLink
            to="/category/celular"
            className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>celular</NavLink>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;

