/* ====================
HEADER COMPONENT
==================== */
// import React from "react";
import React, { Component } from "react";

// IMPORT FOR REACT ROUTER
import { Link } from "react-router-dom";

// COMPONENT
//COMPONENTS
import Navbar from "./Navbar.js";

// STYLING
import "../css-sheets/header.css";

// CLASS BASED COMPONENT
class Header extends Component {
render () {
  return (
    <div>
  
      <div className="TopStatusBar">
      <Navbar />
      </div>
      <div className="Title">
    
        <h1>POTTED PALS</h1>
        <nav className="Navbar">
          <Link to="/succulents">SUCCULENTS</Link> 
          <Link to="./flowers">FLOWERS</Link>
          <Link to="./houseplants">HOUSE PLANTS</Link>
          <Link to="./herbs">HERBS</Link>         
        </nav>
      </div>
    </div>
  );
}

  
}


export default Header;