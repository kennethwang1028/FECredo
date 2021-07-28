import React from 'react';
import { useSelector } from 'react-redux';

import Monkey from '../../Logo/Monkey';
import useWindowDimensions from '../../window/window';

import {
  NTBcontainer,
  NTBSection,
  NavLink,
  Icon,
  InputText,
} from './NTBStyles';

const NavTopBar = () => {
  const isIconListClicked = useSelector((state) => state.isIconListClicked);
  const { height, width } = useWindowDimensions();
  return (
    <NTBcontainer style={isIconListClicked ? { paddingLeft: '250px' } : null}>
      <NTBSection>
        <Monkey />
      </NTBSection>
      <NTBSection>
        {isIconListClicked ? null : <InputText />}
        <NavLink to="/">
          <Icon
            alt="user"
            src="./icon/search.svg"
          />
        </NavLink>
        {isIconListClicked ? null : <InputText />}
        <NavLink to="/location">
          <Icon
            alt="user"
            src="./icon/location.svg"
          />
        </NavLink>
      </NTBSection>
      <NTBSection>
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
      </NTBSection>

    </NTBcontainer>
  );
};

export default NavTopBar;
