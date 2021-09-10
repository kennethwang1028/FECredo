import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Monkey from '../../Logo/Monkey';

import {
  TopBarContainerStyle,
  NavLinkStyle,
  NavIconStyle,
  NavInputText,
} from '../../Styles';

const NavTopBar = () => {
  const dispatch = useDispatch();

  const {
    countInfoWidth,
    isSideBarClicked,
  } = useSelector((state) => state.window);
  const {
    isLoadUserInfo,
    userInfo,
  } = useSelector((state) => state.user);
  const {
    photo,
    city,
  } = userInfo;

  const [searchText, setSearchText] = useState('');

  return (
    <TopBarContainerStyle>
      <Monkey />
      {
      countInfoWidth < 900 || isSideBarClicked
        ? null
        : (
          <NavInputText />
        )
      }
      <NavLinkStyle to="/search">
        <NavIconStyle
          alt="user"
          src="./icon/search.svg"
          width="40"
          height="40"
        />
      </NavLinkStyle>
      {
      isSideBarClicked
        ? null
        : (
          isLoadUserInfo
            ? <>{city}</>
            : <NavInputText />
        )
      }
      <NavLinkStyle to="/location">
        <NavIconStyle
          alt="user"
          src="./icon/location.svg"
          width="40"
          height="40"
        />
      </NavLinkStyle>
      <NavLinkStyle to="/login">
        <NavIconStyle
          alt="user"
          src={
            isLoadUserInfo
              ? photo
              : './icon/portrait.svg'
          }
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
