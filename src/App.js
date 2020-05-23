import React from 'react';
import productsData from './productsData';
import './App.css';
import Product from './Product';

function App() {
 const newProducts = productsData.map(item => <Product  />)
  return (
    <div>
     
    </div>
  );
}

export default App;
