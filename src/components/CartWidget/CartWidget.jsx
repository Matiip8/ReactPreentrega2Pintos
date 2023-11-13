import React from 'react';
import cart from './assets/carro.png';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={cart} alt="cart-widget" />
      3
    </div>
  );
}

export default CartWidget;
