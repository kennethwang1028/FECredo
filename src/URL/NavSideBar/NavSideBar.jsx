import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  SetIsSideBarClicked,
} from '../../Redux';

import {
  SideBarListContainerStyle,
  NavLinkStyle,
  NavIconStyle,
  NavTextStyle,
  Select,
} from '../../Styles';

const iconArray = [
  'home', 'search', 'bookmark', 'location', 'shopcart', 'setting'];
const iconTextArray = [
  'Home', 'Search', 'Bookmark', 'Location', 'Shop Cart', 'Setting'];
const num = iconArray.length;

const NavSideBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    countWindowHeight,
    isSideBarClicked,
  } = useSelector((state) => state.window);

  let numberofIcons = Math.floor(countWindowHeight / 50) - 4;
  if (numberofIcons > num) {
    numberofIcons = num;
  }

  const handleChange = (event) => {
    history.push(event.target.value);
  };

  return (
    <div>
      <SideBarListContainerStyle
        isSideBarClicked={isSideBarClicked}
      >
        <NavIconStyle
          alt="user"
          src="./icon/list.svg"
          width="40"
          height="40"
          onClick={() => dispatch(SetIsSideBarClicked())}
        />
      </SideBarListContainerStyle>
      {[...Array(numberofIcons)].map((i, index) => (
        <div key={iconArray[index]}>
          <NavLinkStyle to={`/${iconArray[index]}`}>
            <NavIconStyle
              alt={iconArray[index]}
              src={`./icon/${iconArray[index]}.svg`}
              width="40"
              height="40"
            />
            {isSideBarClicked ? <NavTextStyle>{iconTextArray[index]}</NavTextStyle> : null}
          </NavLinkStyle>
        </div>
      ))}
      <NavLinkStyle to="/login">
        <NavIconStyle
          alt="login"
          src="./icon/portrait.svg"
          width="40"
          height="40"
        />
        {isSideBarClicked ? <NavTextStyle>Log In</NavTextStyle> : null}
      </NavLinkStyle>
      {numberofIcons === num ? null
        : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NavIconStyle
              alt="user"
              src="./icon/more.svg"
              width="40"
              height="40"
              onClick={() => dispatch(SetIsSideBarClicked())}
            />
            {isSideBarClicked
              ? (
                <Select onChange={handleChange}>
                  <option>More</option>
                  {iconArray.slice(numberofIcons).map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </Select>
              )
              : null}
          </div>
        )}
    </div>
  );
};

export default NavSideBar;
