import React from 'react';
import productsData from './productsData';
import './App.css';
import Product from './Product';

function App() {
 const newProducts = productsData.map(item => <Product key={item.id} product={item} />)
  return (
    <div>
     {newProducts}
    </div>
  );
}

export default App;
