// home produces the home page and passes in props to generate other functionalities

import React, { useState, useEffect } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Searchbar from "../Navbar/Searchbar";
import Footer from "../Footer/Footer";

export default function Home() {
  // setters and getters to create a new array for the search/categories
  //will be used to filter the products by search and categories
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //useEffect function that calls in the data recieved from the fetchproducts function that fetches the data
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://codepath-store-api.herokuapp.com/store"
      );
      const data = await response.json();
      const fetchedProducts = data.products;
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  // handle search takes in user input and filters based on what they type to produce their wanted results from the given data
  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // handle clicks is what allows users to click on the different buttons that render those products based on their categories 
  const handleClick = (event) => {
    const category = event.target.value.toLowerCase();
    if (category === "all categories") {
      //if  the user clicks all categories, only produce that button
      setFilteredProducts(products);
    } else {
      // else, only render the specific product based on what the user click 
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    // html use to display the buttons, about us, contact us, adn calling the footer at the end 
    <div className="home">
      <Hero>Home Page</Hero>
      <Searchbar handleSearch={handleSearch} />
      <div className="btn-group">
        <button value="All Categories" onClick={handleClick}>
          All Categories
        </button>
        <button value="Clothing" onClick={handleClick}>
          Clothing
        </button>
        <button value="Food" onClick={handleClick}>
          Food
        </button>
        <button value="Accessories" onClick={handleClick}>
          Accessories
        </button>
        <button value="Tech" onClick={handleClick}>
          Tech
        </button>
      </div>
      <h2 id="BuyNow">Latest Products</h2>
      <ProductGrid products={filteredProducts} />
      <div className="about" id="About">
        <div className="content">
          <h3 id="AboutUs">About</h3>
          <div className="summary">
            <div className="texts">
              <p>
                The codepath student store offers great products at great prices
                from a great team and for a great cause.
              </p>
              <p>
                We've searched far and wide for items that perk the interests of
                even the most eccentric students and decided to offer them all
                here in one place.
              </p>
              <p>
                All proceeds go towards bringing high quality CS education to
                college students around the country.
              </p>
              <img
                src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"
                alt="codepath image"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="Contact" className="contact">
        <div className="content">
          <h3 id="ContactUs">Contact Us</h3>
          <div className="summmary">
            <ul className="info">
              <li>
                <span className="label">"Email"":"</span>
                <span>codepath.org</span>
              </li>
              <li>
                <span className="label">"Phone:"</span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">"Address:</span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
              <li>
                <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
