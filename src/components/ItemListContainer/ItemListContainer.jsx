import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asycMock';
import ItemList from '../ItemList/ItemList';

import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams ()

  useEffect(() => {

const asycFunc = categoryId ? getProductsByCategory : getProducts

asycFunc (categoryId)

      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]); // Corregí la posición de los corchetes

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} /> {/* Cambié 'itemList' a 'ItemList' para que coincida con el nombre del componente */}
    </div>
  );
};

export default ItemListContainer;
