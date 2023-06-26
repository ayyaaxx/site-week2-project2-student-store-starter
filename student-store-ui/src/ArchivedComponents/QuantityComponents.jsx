import React from 'react'
import { useState, useEffect } from "react";

const QuantityComponents = () => {
const [Quantity, setQuantity] = useState(0);

  return {
    Quantity,
    setQuantity
}
}

export default QuantityComponents
