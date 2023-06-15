// import React, { Children, useEffect, useState } from "react";
// import axios from "axios"
// import { useParams } from "react-router-dom";
// // import ProductCard from "../ProductCard/ProductCard";


// const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart }) => {

// const {id} = useParams();
// const [productGrid, setProductGrid] = useState(null);

//   useEffect(() => {
//     axios.get(`https://codepath-store-api.herokuapp.com/store${id}`)
//     .then((response) => {
//       setProductGrid(response.data);
//     })
//     .catach((error) => {
//       console.error(error);
//     });
//   }, [id]);

//   if (!productGrid){
//     return <div>Loading...</div>
//   }

//   const {name, price} = productDetails; 
  
//   return (
//     <div className="product-grid">
//         <h1>My Cart</h1>
//         <p>Name: {id}</p>
//         <p>Description {Description}</p>
//     </div>
//   );
// }
   

// export default ProductGrid


import React, { Children, useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart }) => {
const {id} = useParams();
const [productGrid, setProductGrid] = useState(null);
  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`)
    .then((response) => {
      setProductGrid(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [id]);

  if (!productGrid){
    return <div>Loading...</div>
  }

  // const {name, price} = productDetails;
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          quantity = {0}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          showDescription={false} // Setting showDescription prop to false
        />
      ))}
        {/* <h1>My Cart</h1>
      <p>Name: {id}</p>
      <p>Description {Description}</p> */}
    </div>
  );
}