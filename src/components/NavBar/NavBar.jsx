
import React from 'react';
import logo from './assets/logo.png';
import './NavBar.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../CartWidget/CartWidget';

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
      <div className="item-list-container">
        <ItemListContainer greeting={'Gracias por tu compra'} />
      </div>
    </div>
  );
};

export default NavBar;

