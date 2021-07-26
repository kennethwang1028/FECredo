import React from 'react';

import Monkey from '../../Logo/Monkey';

import {
  NSBcontainer,
  NavLink,
  Icon,
} from './NSBStyles';

const NavTopBar = () => (
  <NSBcontainer>
    <Monkey />
    <NavLink to="/">
      <Icon
        alt="user"
        src="./icon/search.svg"
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
  </NSBcontainer>
);

export default NavTopBar;
