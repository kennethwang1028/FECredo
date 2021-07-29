import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CategoryBox from './CategoryBox/CategoryBox';
import TopImageSelector from './TopImageSelector/TopImageSelector';

import {
  HomeContainer,
} from './HomeStyle';

const Home = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  return (
    <HomeContainer
      extent={isIconListClicked}
    >
      <TopImageSelector />
      <CategoryBox />
    </HomeContainer>
  );
};

export default Home;
