// use of html to produce the navbar and is linked to the home page

import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="CodePathLogo">
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"
          alt="codepath logo"
        ></img>
      </div>
      <Logo>Home Page</Logo>
    </nav>
  );
}
