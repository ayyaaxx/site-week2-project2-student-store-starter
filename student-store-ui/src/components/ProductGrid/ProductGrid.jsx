// display the productgrid that is first shown in home and passed in here and moved along to product card

// import React from "react";
// import "./ProductGrid.css";
// import ProductCard from "../ProductCard/ProductCard";
// import ShoppingCartComponent from "../ShoppingCartComponent";

// const ProductGrid = ({
//   products,
//   handleRemoveItemFromCart,
//   setShoppingCart ,
//   shoppingCart
// }) => {
//   return (
//     <div className="product-grid">
//     {products.map((product) => (
//       <ProductCard
//         key={product.id}
//         products={product}
//         handleAddItemToCart={handleAddItemToCart} // Pass the function as a prop
//         shoppingCart = {shoppingCart}
//         setShoppingCart = {setShoppingCart}
//         handleRemoveItemFromCart={handleRemoveItemFromCart}
//         productId = {product.id}
        
//       />
//     ))}
//   </div>
  
//   );
// };

// export default ProductGrid;


import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,

}) => {
  return (
    <div className="product-grid">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        products={product}
        handleAddItemToCart={handleAddItemToCart} // Pass the function as a prop
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        productId = {product.id}
      />
    ))}
  </div>
  
  );
};

export default ProductGrid;
