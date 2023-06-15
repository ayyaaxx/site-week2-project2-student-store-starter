import * as React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Searchbar from "../Navbar/Searchbar"
import Home from "../Home/Home"

// import CheckoutForm from "../CheckoutForm/CheckoutForm"
// import ProductCard from "../ProductCard/ProductCard"
// import ProductDetail from "../ProductDetail/ProductDetail"
// import ProductGrid from "../ProductGrid/ProductGrid"
// import ProductView from "../ProductView/ProductView"
// import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./App.css"
import axios from "axios"
import { Link } from "react-router-dom";


export default function App() {

const [products, setProducts] = useState([]);
const [isFetching, setIsFetching] = useState(false);
const [cartItems, setCartItems] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);


const handleAddItemToCart = (product) => {
  setCartItems((prevCartItems) => [...prevCartItems, product]);
};

const handleRemoveItemFromCart = (product) => {
  setCartItems((prevCartItems) =>
    prevCartItems.filter((item) => item.id !== product.id)
  );
};



useEffect(() => {
   axios
  .get("https://codepath-store-api.herokuapp.com/store")
  .then((response) => {
    setProducts(response.data.products);
  })
  .catch((error) => {
    console.error(error);
  });
  }, []);

   return ( 
    <div>
    <Navbar />

  
    {/* <Home /> */}
   {/* <BrowserRouter> */}
    <Router >    
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>  

    <Routes>
        <Route path ="/" element = {<Home />}> </Route> 
        {/* <Route path="/AboutUs" element = {<ProductGrid/>}> </Route>  */}
    </Routes>
  </Router>
  {/* </BrowserRouter>  */}
  <Home products={products}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    <Sidebar />
    <Searchbar products ={products} setFilteredProducts={setFilteredProducts}/>
   
    </div>
 
  
)
}


