import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import ShoppingCartComponent from "../ShoppingCartComponent";
import handleAddItemToCart from "../handleAddItemToCart";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import QuantityComponents from "../QuantityComponents";

const ProductCard = ({
  products,
  productId,
  handleRemoveItemFromCart,
  showDescription,
  shoppingCart,
  setShoppingCart
}) => {
  const {Quantity, setQuantity} = QuantityComponents()
  const { id, name, price, description, image } = products;

  const handleAddToCart = () => {
    handleAddItemToCart(productId);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(productId);
  };
  console.log(shoppingCart)

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${products.id}`}>
          <img src={products.image} alt={products.name} />
        </Link>
        <p className="product-name">{name}</p>
        <p className="product-price">${price?.toFixed(2)}</p>
        {showDescription && (
          <p className="product-description">{description}</p>
        )}
        <button className="add" onClick={() => handleAddItemToCart(setShoppingCart, shoppingCart, products, Quantity, setQuantity)}>
          Add to Cart
        </button>
        <button className="remove" onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      </div>
      {Quantity > 0 && <p className="product-quantity">Quantity: {Quantity}</p>
}
    </div>
  );
};

export default ProductCard;


