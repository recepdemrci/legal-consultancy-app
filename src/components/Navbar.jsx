import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import NavbarList from "./NavbarList";
import NavbarToggler from "./NavbarToggler";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  function handleClick() {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  }

  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <NavbarToggler
          collapsed={collapsed} 
          handleClick={handleClick} 
        />
        <NavbarList 
          collapsed={collapsed}
          handleClick={handleClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
