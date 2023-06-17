// display the productgrid that is first shown in home and passed in here and moved along to product card

import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-grid">
      {products.map((products) => (
        <ProductCard products={products} key={products.id} />
      ))}
    </div>
  );
};

export default ProductGrid;
