import React from "react";
import NavbarItem from "components/Navbar/NavbarItem";

const navbarItems = [
  { href: "#home-container", item: "ANASAYFA" },
  { href: "#top-container", item: "HİZMETLERİMİZ" },
  { href: "#middle-container", item: "HAKKIMIZDA" },
  { href: "#bottom-container", item: "KADROMUZ" },
  { href: "#contact-container", item: "İLETİŞİM" },
];

function NavbarList(props) {
  return (
    <div
      class={
        "collapse navbar-collapse text-center" +
        (props.collapsed ? "" : " show")
      }
      id="navbarId"
    >
      <ul class="navbar-nav mx-auto my-lg-0 mt-4">
        {navbarItems.map((navbarItem, idx) => (
          <NavbarItem key={idx} href={navbarItem.href} item={navbarItem.item} handleClick={props.handleClick} />
        ))}
      </ul>
    </div>
  );
}

export default NavbarList;
