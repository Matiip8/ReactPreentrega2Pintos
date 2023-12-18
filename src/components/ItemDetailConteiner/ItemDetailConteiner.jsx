import { useState, useEffect } from 'react';
import { getProductById } from '../../asycMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams(); // Corregido el uso de useParams

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} /> {/* Corregido el uso de 'itemDetail' a 'ItemDetail' */}
    </div>
  );
}

export default ItemDetailContainer;
