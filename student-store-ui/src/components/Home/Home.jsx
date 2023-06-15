import * as React from "react"
import { useState, useEffect } from "react"
import "./Home.css"
import axios from "axios"
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero"
 


const Home = ({products, handleAddItemToCart, handleRemoveItemFromCart}) => {

  if (!products) {
    return <p>Loading...</p>; 
  }
  
return(
  <div>
  <Hero />
  
  <div>
      <ul>
        {products.map((product) => (
          <ul>
          <li key={product.id}>{product.name}</li>
          <button onClick={() => handleAddItemToCart(product)}>Add to Cart</button>
          <button onClick={() => handleRemoveItemFromCart(product)}>Remove from Cart</button>
          {/* <li key={product.id}>{product.price}</li> */}
          </ul>
        ))}
       </ul>


    </div> 

  <div id = "Contact" className = "contact">
     <div className = "content">
      <h3>Contact Us</h3>
      <div className = "summmary">
        <ul className = "info">
          <li>
            <span className = "label">
              "Email"":"
            </span>
            <span>codepath.org</span>
          </li>
          <li>
            <span className = "label">
              "Phone:"
            </span>
            <span>1-800-CODEPATH</span>
          </li>
          <li>
            <span className = "label">"Address:</span>
            <span>
              123 Fake Street, San Francisco, CA
            </span>
          </li>
        </ul>
      </div>
     </div>

  </div>
  

  </div>
  )
}
  
export default Home; 


