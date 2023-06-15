import React from 'react';

export default function ProductCard() {
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription
} {
  const { id, description, price } = product;

  const handleAddToCart = () => {
    handleAddItemToCart(product);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(product);
  };

  return (
    <div className="product-card">
      <h3>{id}</h3>
      {showDescription && <p>{description}</p>}
 
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
}


