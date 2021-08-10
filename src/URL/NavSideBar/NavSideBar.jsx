import React, { useEffect } from 'react';
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
  const dispatch = useDispatch();
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const windowWidth = useSelector((state) => state.window.windowWidth);
  const { height, width } = useWindowDimensions();
  const history = useHistory();
  const vw = Math.floor(width / 100);
  useEffect(() => {
    if (isIconListClicked) {
      const num = Math.floor(width * 0.3);
      if (num < 100) {
        dispatch(windowWidthSet(width - 100 - 2 * vw));
      } else if (num > 330) {
        dispatch(windowWidthSet(width - 330 - 2 * vw));
      } else {
        dispatch(windowWidthSet(width - num - 2 * vw));
      }
    } else {
      const num = Math.floor(width * 0.1);
      if (num < 50) {
        dispatch(windowWidthSet(width - 50 - 2 * vw));
      } else if (num > 80) {
        dispatch(windowWidthSet(width - 80 - 2 * vw));
      } else {
        dispatch(windowWidthSet(width - num - 2 * vw));
      }
    }
  }, [width, isIconListClicked]);

  dispatch(windowHeightSet(height));

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
      width={width - windowWidth - 2 * vw}
    >
      <NavIcon
        alt="user"
        src="./icon/list.svg"
        width="50"
        height="50"
        onClick={() => dispatch(ListClicked())}
      />
      {[...Array(numberofIcon(width, height, num))].map((i, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <NavLink to={`/${iconArray[index]}`}>
            <NavIcon
              alt={iconArray[index]}
              src={`./icon/${iconArray[index]}.svg`}
              width="50"
              height="50"
            />
            {isIconListClicked ? <NavText>{iconTextArray[index]}</NavText> : null}
          </NavLink>
        </div>
      ))}
      <NavLink to="/login">
        <NavIcon
          alt="login"
          src="./icon/portrait.svg"
          width="50"
          height="50"
        />
        {isIconListClicked ? <NavText>Log In</NavText> : null}
      </NavLink>
      {numberofIcon(width, height, num) === num ? null
        : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NavIcon
              alt="user"
              src="./icon/more.svg"
              width="50"
              height="50"
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
