import React from 'react'
import "./Searchbar.css"
import { useState } from 'react'

const Searchbar = ({ products, setFilteredProducts }) => {
const [searchInput, setSearchInput] = useState("");

const handleChange = (e) => {
  setSearchInput(e.target.value);
  filterProducts(e.target.value);
};

const filterProducts = (searchTerm) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProducts(filteredProducts);
};

  return (
    <div>
    <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} 
    />
        <p>Help</p>
        <p>My Cart</p>
    </div>
  )
}

export default Searchbar
