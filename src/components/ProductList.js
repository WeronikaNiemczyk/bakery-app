// src/components/ProductList.js

import React from "react";

const ProductList = ({ products, onProductChange }) => {
  return (
    <div>
      <h2>Wprowadź ilość</h2>
      {products.map((product) => (
        <div key={product.id}>
          <label>{product.name}</label>
          <input
            type="number"
            value={product.quantity || ""}
            onChange={(e) => onProductChange(product.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
