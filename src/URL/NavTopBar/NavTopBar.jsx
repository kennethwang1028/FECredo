import React from 'react';
import { useSelector } from 'react-redux';

import Monkey from '../../Logo/Monkey';
import useWindowDimensions from '../../window/window';

import {
  TopBarContainer,
  NavLink,
  NavIcon,
  NavInputText,
} from '../../Styles';

const NavTopBar = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const { width } = useWindowDimensions();

  return (
    <TopBarContainer
      isIconListClicked={isIconListClicked}
      width={width}
    >
      <Monkey />
      {width < 900 || isIconListClicked ? null : <NavInputText />}
      <NavLink to="/">
        <NavIcon
          alt="user"
          src="./icon/search.svg"
          width="50"
          height="50"
        />
      </NavLink>
      {isIconListClicked ? null : <NavInputText />}
      <NavLink to="/location">
        <NavIcon
          alt="user"
          src="./icon/location.svg"
          width="50"
          height="50"
        />
      </NavLink>
      {isIconListClicked ? null : <NavInputText />}
      <NavLink to="/login">
        <NavIcon
          alt="user"
          src="./icon/portrait.svg"
          width="50"
          height="50"
        />
      </NavLink>
      <NavLink to="/shopcart">
        <NavIcon
          alt="user"
          src="./icon/shopcart.svg"
          width="50"
          height="50"
        />
      </NavLink>
    </TopBarContainer>
  );
};

export default NavTopBar;
