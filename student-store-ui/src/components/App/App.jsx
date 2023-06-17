// import statments that render different files
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import ProductDetail from "../ProductDetail/ProductDetail";

// App file uses a useEffect function to save the array of products fetched from the api
export default function App() {
  // setter and getter functions used to fetch data from the store api
  const [products, setProducts] = useState([]); // all products
  const [isFetching, setIsFetching] = useState(false);
  const [cartItems, setCartItems] = useState([]); // in progress for the add/remove items

  // non-functioning buttons to add items (button)
  const handleAddItemToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  // non-functioning buttons to remove items (button)
  const handleRemoveItemFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  useEffect(() => {
    const authUser = async () => {
      setIsFetching(true);
      // uses a try and catch to work if the data is retrieved and not crash the website
      try {
        const res = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (res?.data?.products) {
          console.log(res?.data?.products);
          await setProducts(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    authUser();
  }, []);

  // my return uses routes to display the productDetails (the connection between my home and the product description)
  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route
              path="/products/:productId"
              element={<ProductDetail products={products} />}
            />
            <Route
            // the home route that renders all the data that is passed in 
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route path="*" />
          </Routes>
        </main>
      </Router>
      <BrowserRouter></BrowserRouter>
    </div>
  );
}
