import React from 'react';

import Monkey from '../../Logo/Monkey';

import {
  NTBcontainer,
  NavLink,
  Icon,
} from './NTBStyles';

const NavTopBar = () => (
  <NTBcontainer>
    <Monkey />
    <input type="text" />
    <NavLink to="/">
      <Icon
        alt="user"
        src="./icon/search.svg"
      />
    </NavLink>
    <input type="text" />
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
  </NTBcontainer>
);

export default NavTopBar;
