import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CategoryBoxSingle from './CategoryBox/CategoryBoxSingle';
import CategoryBoxFour from './CategoryBox/CategoryBoxFour';
import TopImageSelector from './TopImageSelector/TopImageSelector';

import {
  HomeContainer,
  RowContainer,
} from './HomeStyle';

import PromoteData from './homeData';
import CategoryData from './homeData';
// fetch

const Home = () => {
  const isIconListClicked = false;

  const promoteData = PromoteData.PromoteData;
  const categoryData = CategoryData.CategoryData;

  const len = categoryData.length;
  let num = Math.floor(len / 3);
  if (num * 3 !== len) {
    num += 1;
  }

  return (
    <HomeContainer
      extent={isIconListClicked}
    >
      {/* <TopImageSelector /> */}
      <RowContainer>
        {promoteData.map((i) => (
          <CategoryBoxSingle
            id={i.id}
            key={i.id}
            name={i.name}
            photo={i.photo}
            category={i.category}
          />
        ))}
      </RowContainer>
      {[...Array(num)].map((j, index) => (
        <RowContainer
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {categoryData.slice(index * 3, index * 3 + 3).map((i) => (
            <CategoryBoxFour
              categoryId={i.categoryId}
              key={i.categoryId}
              listPromotion={i.promotion}
              category={i.category}
            />
          ))}
        </RowContainer>
      ))}
    </HomeContainer>
  );
};

export default Home;
