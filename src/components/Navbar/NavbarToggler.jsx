import React from "react";
import "assets/styles/Navbar.css";

function NavbarToggler(props) {
  return (
    <button
      class={"navbar-toggler mx-auto p-2" + (props.collapsed ? " collapsed" : "")}
      onClick={props.handleClick}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarId"
      aria-controls="navbarId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  );
}

export default NavbarToggler;
