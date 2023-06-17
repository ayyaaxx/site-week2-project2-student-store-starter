//takes in the data from product grid to produce each individual card on the page


import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// passes in these props 
export default function ProductCard({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  productId,
  quantity,
  showDescription,
}) {
  // saves all the data into one variable 
  const { id, name, price, description, image } = products;

  const handleAddToCart = () => {
    handleAddItemToCart(id);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(id);
  };

  return (
    // Link is used to route to the product description 
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${products.id}`}>
          <img src={products.image} alt={products.name} />
        </Link>
        <p>{products.name}</p>
        <p>${products.price}</p>
        {/* only display the description, if it the product clicked on */}
        {showDescription && <p>{products.description}</p>}
        <button onClick={() => handleAddItemToCart(products)}>
          Add to Cart
        </button>
        <button onClick={() => handleRemoveItemFromCart(products)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
