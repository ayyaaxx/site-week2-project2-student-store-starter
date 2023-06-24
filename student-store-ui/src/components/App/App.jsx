// import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter,
// } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Navbar from "../Navbar/Navbar";
// import Home from "../Home/Home";
// import "./App.css";
// import ProductDetail from "../ProductDetail/ProductDetail";
// import Sidebar from "../Sidebar/Sidebar";
// import ShoppingCartComponent from "../ShoppingCartComponent";

// // App file uses a useEffect function to save the array of products fetched from the api
// export default function App() {
//   // setter and getter functions used to fetch data from the store api
//   const [products, setProducts] = useState([]); // all products
//   const [isFetching, setIsFetching] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const {shoppingCart, setShoppingCart} = ShoppingCartComponent()

  
//   // const handleAddItemToCart = (product) => {
//   //   const updatedCart = shoppingCart.map((item) => {
//   //     if (item.id === product.id) {
//   //       return { ...item, quantity: item.quantity + 1,  };
//   //     }
//   //     return item;
//   //   });
  
//   //   const existingProduct = updatedCart.find((item) => item.id === product.id);
  
//   //   if (!existingProduct) {
//   //     updatedCart.push({ ...product, quantity: 1 });
//   //   }
  
//   //   setShoppingCart(updatedCart);
//   // };
  
//   // Function to remove an item from the shopping cart
//   const handleRemoveItemFromCart = (product) => {
//     setShoppingCart((shoppingCart) =>
//     shoppingCart.filter((item) => item.product !== product)
//     );
//   };
  
//     // {console.log({handleAddItemToCart})}


//   useEffect(() => {
//     const authUser = async () => {
//       setIsFetching(true);
//       // uses a try and catch to work if the data is retrieved and not crash the website
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/"
//           );
//         if (res?.data?.products) {
//           console.log(res?.data?.products);
//           await setProducts(res.data.products);
//         } else {
//           setError("Error fetching products.");
//         }
//       } catch (err) {
//         console.log(err);
//         const message = err?.response?.data?.error?.message;
//         setError(message ?? String(err));
//       } finally {
//         setIsFetching(false);
//       }
//     };

//     authUser();
//   }, []);



//   // my return uses routes to display the productDetails (the connection between my home and the product description)
//   return (
//     <div className="app">
//       <div>
//       <Sidebar
//               isOpen={isOpen}
//               setIsOpen={setIsOpen}
//               products={products}
//               shoppingCart = {shoppingCart}
//             />
        
//         </div>
//       <Router>
//         <main>
//           <div>
            
//           </div>

//           <Navbar />
//           <Routes>
//             <Route
//               path="/products/:productId"
//               element={<ProductDetail products={products} />}
//             />
//             <Route
//               // the home route that renders all the data that is passed in
//               path="/"
//               element={
//                 <Home
//                   products={products}
//                   shoppingCart = {shoppingCart}
//                   setShoppingCart = {setShoppingCart}
//                   handleRemoveItemFromCart={handleRemoveItemFromCart}
//                 />
//               }
//             />
//             <Route path="*" />
//           </Routes>
//         </main>
//       </Router>
//       <BrowserRouter></BrowserRouter>
//     </div>
//   );
// }

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
import Sidebar from "../Sidebar/Sidebar";
// import ShoppingCartComponent from "../ShoppingCartComponent";

export default function App() {
  const [products, setProducts] = useState([]); // all products
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  // const [cartItem, setCartItem] = useState([]);

  const handleAddItemToCart = (item)=>{
    if(cart.includes(item)){
        console.log(item.count)
        item.count++
      }else{
        item.count = 1
        cart.push(item)
      }
      setCart(cart)
      console.log("Cart")
      console.log(cart)
  }
   
  const handleRemoveItemFromCart = (item)=>{
    if(cart.includes(item)){
        console.log(item.count)
        item.count--
        if(item.count <= 0){
          const index = cart.indexOf(item)
          var noItem = cart.splice(index, 1)
          setCart(noItem)
          console.log(cart)
        }
      }
    else{
      item.count = 1
      cart.push(item)
    }
    setCart(cart)
    console.log("Cart")
    console.log(cart)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        if (res?.data?.products) {
          console.log(res?.data?.products);
          setProducts(res.data.products);
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

    fetchProducts();
  }, []);

  // console.log("**cart")
  // console.log(cart)
  return (
    <div className="app">
      <Router>
        <main>
        <div>
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              products={products}
              shoppingCart={cart}
            />
          </div>
          <Navbar />
          <Routes>
            <Route
              path="/products/:productId"
              element={<ProductDetail products={products} />}
            />
            <Route
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
    </div>
  );
}