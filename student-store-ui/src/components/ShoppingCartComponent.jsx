import React from 'react'
import { useState, useEffect } from "react";


const ShoppingCartComponent = () => {
    const [shoppingCart, setShoppingCart] = useState([]);
  return {
    shoppingCart,
    setShoppingCart
}
}

export default ShoppingCartComponent
