import React from 'react';

function Product({ name, category, price }) {
  return (
    <div className="product">
      <h2 className="product-name">{name}</h2>
      <p className="product-category">{category}</p>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default Product;