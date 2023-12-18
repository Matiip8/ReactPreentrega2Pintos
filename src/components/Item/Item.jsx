import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
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
       <link to={`/item/${id}`} className = 'Option'>verdetail</link> 
      </footer>
    </article>
  );
};

export default Item;
