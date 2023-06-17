// the search bar component that creates the search to display on the page 

import React, { useState } from "react";
import "./Searchbar.css"

export default function SearchBar({ handleSearch }) {
  // takes in the handlesearch generated in the home component and sets/handles the user input to display their wanted result 
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className="search">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleChange}
    />  

  </div>
    

  );
}
