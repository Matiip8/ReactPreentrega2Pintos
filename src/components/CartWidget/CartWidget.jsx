import React from 'react';
import cart from './assets/carro.png';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={cart} alt="cart-widget" />
      <span>3</span>
    </div>
  );
}

export default CartWidget;
