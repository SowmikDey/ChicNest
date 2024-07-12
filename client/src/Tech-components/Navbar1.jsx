// Navbar1.js
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
              <a href="/tech"><li>TECH</li></a>
              <a href="/food"><li>FOOD</li></a>
              <a href="/clothes"><li>CLOTHES</li></a>
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
          <a href="#tech1">Tech1</a>
          <a href="#tech2">Tech2</a>
          <a href="#tech3">Tech3</a>
          <a href="#tech4">Tech4</a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar1;
