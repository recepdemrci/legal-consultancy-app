import React from 'react';
import '../assets/styles/Navbar.css'
import NavbarList from './NavbarList';
import NavbarToggler from './NavbarToggler';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <NavbarToggler />
        <NavbarList />
      </div>
    </nav>
  );
}

export default Navbar;