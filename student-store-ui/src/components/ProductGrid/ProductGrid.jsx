// display the productgrid that is first shown in home and passed in here and moved along to product card
import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  cart
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          products={product}
          handleAddItemToCart={handleAddItemToCart} // Pass the function as a prop
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          productId={product.id}
          shoppingCart = {cart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
