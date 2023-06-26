// Product view renders the product card component how the product card is viewed 
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const ProductView = ({
  products,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        shoppingCart = {shoppingCart}
        products={products}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        showDescription={true}
      />
    </div>
  );
};

export default ProductView;
