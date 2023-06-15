import * as React from "react"
import "./Navbar.css"
import { useState } from "react"

export default function Navbar() {

  const [home, setHome] = useState("Home")
  // const [About, setAbout] = useState("About Us")
  // const [Contact, setContact] = useState("Contact Us")
  // const [Buy, setBuy] = useState("Buy Now")

  const handleSubmit = (event) => {
    event.preventDefault()
    setHome(event.target.value)
  }
const handleChange = (event) => {
  setHome(event.target.value)
}

  return (
    <nav className="navbar">
      {/* <p>Navbar</p> */}
        <div className="topnav">
          <div className = "logo">
            <a href = "hyperlink for home">
              <img src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
              alt = "codepath logo" >
              </img> 
            </a> 
          </div>
          <div className = "Iglogo" > 
            <img src = "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2011.png" /> 
          </div>
          <div className = "Tlogo" > 
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" /> 
          </div>
          <div className = "Metlogo" > 
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png" /> 
          </div>
          <form onSubmit = {handleSubmit}>
            <input
            type = "button" 
            onChange = {handleChange}
            value = {home}
            />
          </form>
          <a href="#AboutUs">About Us </a>
          <a href="#ContactUs">Contact Us </a>
          <a href="#BuyNow">Buy Now </a>
        </div>
    </nav>
  )
}

