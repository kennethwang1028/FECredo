import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListClicked } from '../../Redux/index';

import {
  NSBcontainer,
  NavLink,
  Icon,
  Text,
} from './NSBStyles';

import useWindowDimensions from '../../window/window';

const NavSideBar = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const dispatch = useDispatch();
  // const { height, width } = useWindowDimensions();
  return (
    <NSBcontainer style={isIconListClicked ? { minWidth: '220px' } : null}>
      <Icon
        alt="user"
        src="./icon/list.svg"
        onClick={() => dispatch(ListClicked())}
      />
      <NavLink to="/home">
        <Icon
          alt="home"
          src="./icon/home.svg"
        />
        {isIconListClicked ? <Text>Home Page</Text> : null}
      </NavLink>
      <NavLink to="/search">
        <Icon
          alt="search"
          src="./icon/search.svg"
        />
        {isIconListClicked ? <Text>Search</Text> : null}
      </NavLink>
      <NavLink to="/bookmark">
        <Icon
          alt="bookmark"
          src="./icon/star.svg"
        />
        {isIconListClicked ? <Text>Book Mark</Text> : null}
      </NavLink>
      <NavLink to="/location">
        <Icon
          alt="location"
          src="./icon/location.svg"
        />
        {isIconListClicked ? <Text>Location</Text> : null}
      </NavLink>
      <NavLink to="/shopcart">
        <Icon
          alt="shopcart"
          src="./icon/shopcart.svg"
        />
        {isIconListClicked ? <Text>Shop Cart</Text> : null}
      </NavLink>
      <NavLink to="/login">
        <Icon
          alt="login"
          src="./icon/portrait.svg"
        />
        {isIconListClicked ? <Text>Log In</Text> : null}
      </NavLink>
      <NavLink to="/setting">
        <Icon
          alt="setting"
          src="./icon/setting.svg"
        />
        {isIconListClicked ? <Text>Setting</Text> : null}
      </NavLink>
    </NSBcontainer>
  );
};

export default NavSideBar;
