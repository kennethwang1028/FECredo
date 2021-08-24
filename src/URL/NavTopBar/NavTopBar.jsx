import React from 'react';
import { useSelector } from 'react-redux';

import Monkey from '../../Logo/Monkey';

import {
  TopBarContainerStyle,
  NavLinkStyle,
  NavIconStyle,
  NavInputText,
} from '../../Styles';

const NavTopBar = () => {
  const {
    countInfoWidth,
    isSideBarClicked,
  } = useSelector((state) => state.window);

  return (
    <TopBarContainerStyle>
      <Monkey />
      {countInfoWidth < 900 || isSideBarClicked ? null : <NavInputText />}
      <NavLinkStyle to="/">
        <NavIconStyle
          alt="user"
          src="./icon/search.svg"
          width="40"
          height="40"
        />
      </NavLinkStyle>
      {isSideBarClicked ? null : <NavInputText />}
      <NavLinkStyle to="/location">
        <NavIconStyle
          alt="user"
          src="./icon/location.svg"
          width="40"
          height="40"
        />
      </NavLinkStyle>
      {isSideBarClicked ? null : <NavInputText />}
      <NavLinkStyle to="/login">
        <NavIconStyle
          alt="user"
          src="./icon/portrait.svg"
          width="40"
          height="40"
        />
      </NavLinkStyle>
      <NavLinkStyle to="/shopcart">
        <NavIconStyle
          alt="user"
          src="./icon/shopcart.svg"
          width="40"
          height="40"
        />
      </NavLinkStyle>
    </TopBarContainerStyle>
  );
};

export default NavTopBar;
