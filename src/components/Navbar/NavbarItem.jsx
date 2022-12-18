import React from "react";
import "assets/styles/Navbar.css";


function NavbarItem(props) {
  return (
    <li class="nav-item mx-4" >
      <a class="nav-link" href={props.href}>
        <button class="btn btn-sm p-lg-2 p-3" type="button">{props.item}</button>
      </a>
    </li>
  );
}

export default NavbarItem;
