import React, { useState, useEffect } from 'react';
import { getProducts } from '../../asycMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Corregí la posición de los corchetes

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} /> {/* Cambié 'itemList' a 'ItemList' para que coincida con el nombre del componente */}
    </div>
  );
};

export default ItemListContainer;
