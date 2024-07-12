// Navbar1.js
import React from 'react';
import "./Navbar1.css";

const Navbar1 = () => {
  return (
    <div>
      <div className="n">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="nav">
        <h2 className="h">CHICNEST</h2>
        <div className="links">
          <a href="">Tech1</a>
          <a href="">Tech2</a>
          <a href="">Tech3</a>
          <a href="">Tech4</a>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Navbar1;
