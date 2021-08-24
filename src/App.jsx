import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import {
  SetCategoriesList,
  SetFeaturesList,
  SetCountWindowHeight,
  SetCountWindowWidth,
  SetCountSideBarWidth,
  SetCountInfoWidth,
  SetComsList,
} from './Redux';

import useWindowDimensions from './window/window';

import Routes from './URL/Routes';
import NavTopBar from './URL/NavTopBar/NavTopBar';
import NavSideBar from './URL/NavSideBar/NavSideBar';

import {
  AppContainerStyle,
  NavSideBarContainerStyle,
  NavInfoContainerStyle,
} from './Styles';

const App = () => {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const {
    countSideBarWidth,
    countInfoWidth,
    isSideBarClicked,
  } = useSelector((state) => state.window);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(SetCountWindowHeight(height));
  }, [height]);

  useEffect(() => {
    let sidebarWidth;
    const vw = Math.floor(width / 100);
    if (isSideBarClicked) {
      const num = Math.floor(width * 0.3);
      if (num > 280) {
        sidebarWidth = 280 + 2 * vw;
      } else {
        sidebarWidth = num + 2 * vw;
      }
    } else {
      sidebarWidth = 50 + 2 * vw;
    }
    dispatch(SetCountWindowWidth(width));
    dispatch(SetCountSideBarWidth(sidebarWidth));
    dispatch(SetCountInfoWidth(width - sidebarWidth));
    setLoading(true);
  }, [width, isSideBarClicked]);

  useEffect(() => {
    axios('http://localhost:3001/SDCredo/Categories')
      .then((data) => {
        const arr = [{ categoryid: 0, categoryname: 'All' }].concat(data.data);
        dispatch(SetCategoriesList(arr));
      })
      .catch((err) => console.log(err));

    axios('http://localhost:3001/SDCredo/Features')
      .then((data) => {
        dispatch(SetFeaturesList(data.data));
      })
      .catch((err) => console.log(err));

    axios('http://localhost:3001/SDCredo/Coms')
      .then((data) => {
        dispatch(SetComsList(data.data));
      })
      .catch((err) => console.log(err));

    console.error('Routes');
  }, []);

  return (
    <AppContainerStyle>
      {loading
        ? (
          <Router>
            <NavSideBarContainerStyle
              width={countSideBarWidth}
            >
              <NavSideBar />
            </NavSideBarContainerStyle>
            <NavInfoContainerStyle
              width={countInfoWidth}
            >
              <NavTopBar />
              <Routes />
            </NavInfoContainerStyle>
          </Router>
        )
        : <div>loading</div>}
    </AppContainerStyle>
  );
};

export default App;
