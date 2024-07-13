import React, { useState } from 'react';
import "./Navbar1.css";

const Navbar1 = () => {
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="n">
        <button className="icon-button black" onClick={showDropdown}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {show && (
          <div className="dropdown">
            <ul>
              <a href="/tech"><li>TECH <i class="fa-solid fa-microchip"></i></li></a>
              <a href="/food"><li>FOOD <i class="fa-solid fa-bowl-food"></i></li></a>
              <a href="/clothes"><li>CLOTHES <i class="fa-solid fa-shirt"></i></li> </a>
              <a href=""><li><i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-github"></i></li></a>
            </ul>
          </div>
        )}
        <button className="icon-button red" onClick={hideDropdown}>
          <i className="fa-solid fa-eject"></i>
        </button>
      </div>
      <div className="nav">
        <h2 className="h">CHICNEST</h2>
        <div className="links">
          <div className="scrolling">
            <a href="#tech1">Laptop</a>
            <a href="#tech2">Headsets</a>
            <a href="#tech3">GamiongPcs</a>
            <a href="#tech4">GraphicCard</a>
            <a href="#tech1">Phones</a>
            <a href="#tech2">Tablets</a>
            <a href="#tech3">TV`s</a>
            <a href="#tech4">Fridge</a>
            
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar1;
