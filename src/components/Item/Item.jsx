import React from 'react';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="Carditem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>

      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>

      <section>
        <p className="Info">Precio: ${price}</p> {/* Corregí "prince" a "price" */}
        <p className="Info">Stock disponible: {stock}</p>
      </section>

      <footer className="ItemFooter">
        <button className="Option">Ver detalle</button> {/* Corregí "classname" a "className" */}
      </footer>
    </article>
  );
};

export default Item;
