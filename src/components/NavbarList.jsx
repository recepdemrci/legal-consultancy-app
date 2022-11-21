import React from 'react';
import NavbarItem from './NavbarItem';

const navbarItems = [
  {href: '#home-container', item: 'ANASAYFA'},
  {href: '#top-container', item: 'HİZMETLERİMİZ'},
  {href: '#home-container', item: 'HAKKIMIZDA'},
  {href: '#home-container', item: 'KADROMUZ'},
  {href: '#home-container', item: 'İLETİŞİM'}
]

function NavbarList() {
  return (
    <div class="collapse navbar-collapse text-center" id="navbarColor03">
      <ul class="navbar-nav mx-auto my-2">
        {navbarItems.map(navbarItem => (
          <NavbarItem href={navbarItem.href} item={navbarItem.item} />
        ))}
      </ul>
    </div>
  );
}

export default NavbarList;