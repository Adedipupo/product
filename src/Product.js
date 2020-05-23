import React from 'react';

const Product = (props) => {
return(
  <div>
     <h2>{props.products.name}</h2>
<p>{}</p>
  </div>
)
}

export default Product;