import React from 'react';
import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';  // Ajusta la ruta de importación según la estructura de tu proyecto
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo-navbar" />
        </div>

        <div className="nav-links">
          <button>Inicio</button>
          <button>Servicios</button>
          <button>Multimedia</button>
          <button>Contactos</button>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
