import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'; // Corregido el nombre del componente

function App() {
 
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/category/:categoryId" element={<CategoryContainer />} />
  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
</Routes>

      </BrowserRouter>
     
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemDetailContainer /> {/* Corregido el nombre del componente */}
    </div>
  );
}

export default App;
