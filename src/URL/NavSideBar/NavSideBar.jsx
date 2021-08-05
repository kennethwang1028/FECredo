import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useWindowDimensions from '../../window/window';
import numberofIcon from '../../Component/Function/numberofIcon';

import {
  ListClicked,
  windowHeightSet,
  windowWidthSet,
} from '../../Redux';

import {
  SideBarContainer,
  NavLink,
  NavIcon,
  NavText,
  Select,
} from '../../Styles';

const NavSideBar = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  dispatch(windowHeightSet(height));
  dispatch(windowWidthSet(width));

  const history = useHistory();

  const iconArray = [
    'home', 'search', 'bookmark', 'location', 'shopcart', 'setting'];
  const iconTextArray = [
    'Home', 'Search', 'Bookmark', 'Location', 'Shop Cart', 'Setting'];
  const num = iconArray.length;

  const handleChange = (event) => {
    history.push(event.target.value);
  };

  return (
    <SideBarContainer
      isIconListClicked={isIconListClicked}
    >
      <NavIcon
        alt="user"
        src="./icon/list.svg"
        onClick={() => dispatch(ListClicked())}
      />
      {[...Array(numberofIcon(width, height, num))].map((i, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <NavLink to={`/${iconArray[index]}`}>
            <NavIcon
              alt={iconArray[index]}
              src={`./icon/${iconArray[index]}.svg`}
            />
            {isIconListClicked ? <NavText>{iconTextArray[index]}</NavText> : null}
          </NavLink>
        </div>
      ))}
      <NavLink to="/login">
        <NavIcon
          alt="login"
          src="./icon/portrait.svg"
        />
        {isIconListClicked ? <NavText>Log In</NavText> : null}
      </NavLink>
      {numberofIcon(width, height, num) === num ? null
        : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NavIcon
              alt="user"
              src="./icon/more.svg"
              onClick={() => dispatch(ListClicked())}
            />
            {isIconListClicked
              ? (
                <Select onChange={handleChange}>
                  <option>More</option>
                  {iconArray.slice(numberofIcon(width, height, num)).map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </Select>
              )
              : null}
          </div>
        )}
    </SideBarContainer>
  );
};

export default NavSideBar;
