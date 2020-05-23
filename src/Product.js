import React from 'react';

const Product = ({ name , price }) => {
return(
  <div>
     <h2>{name}</h2>
    <p>{product.price.toLocaleString("en-US",
     { style: "currency", currency: "USD" })} - {props.product.description}</p>
  </div>
)
}

export default Product;