import React from 'react';

import {
  NSBcontainer,
  NavLink,
  Icon,
} from './NSBStyles';

const NavSideBar = () => (
  <NSBcontainer>
    <Icon
      alt="user"
      src="./icon/icon.svg"
    />
    <NavLink to="/home">
      <Icon
        alt="user"
        src="./icon/home.svg"
      />
    </NavLink>
    <NavLink to="/">
      <Icon
        alt="user"
        src="./icon/search.svg"
      />
    </NavLink>
    <NavLink to="/">
      <Icon
        alt="user"
        src="./icon/star.svg"
      />
    </NavLink>
    <NavLink to="/location">
      <Icon
        alt="user"
        src="./icon/location.svg"
      />
    </NavLink>
    <NavLink to="/shopcart">
      <Icon
        alt="user"
        src="./icon/shopcart.svg"
      />
    </NavLink>
    <NavLink to="/login">
      <Icon
        alt="user"
        src="./icon/portrait.svg"
      />
    </NavLink>
    <NavLink to="/">
      <Icon
        alt="user"
        src="./icon/list.svg"
      />
    </NavLink>
  </NSBcontainer>
);

export default NavSideBar;
