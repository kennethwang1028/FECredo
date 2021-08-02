import React, { useState } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  useParams,
} from 'react-router-dom';

import {
  SearchContainer,
} from './SearchStyle';

import SearchCategoryTop from './SearchCategoryTop/SearchCategoryTop';
import SearchCategoryData from './CategoryData';
// fetch catrgory type list;

const Search = () => {
  const { categoryId } = useParams();
  const id = categoryId || 0;

  const searchCategoryData = SearchCategoryData.SearchCategoryData;
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);

  return (
    <SearchContainer
      extent={isIconListClicked}
    >
      <SearchCategoryTop
        searchCategoryData={searchCategoryData}
      />
    </SearchContainer>
  );
};

export default Search;
