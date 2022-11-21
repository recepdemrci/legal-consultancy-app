import {React} from 'react';

function NavbarItem(props) {
  return (
    <li class="nav-item mx-4">
      <a class="nav-link" href={props.href}>{props.item}</a>
    </li>
  );
}

export default NavbarItem;