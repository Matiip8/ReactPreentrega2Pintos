import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'; // Ajusta la ruta de importación de ItemCount

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
    </div>
  );
}

export default App;
