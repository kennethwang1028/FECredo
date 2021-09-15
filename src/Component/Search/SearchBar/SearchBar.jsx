import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  LoadProductsList,
  LoadProductsListLength,
  SearchTextEnter,
  CategoryMainSelected,
} from '../../../Redux';

import {
  SearchCategoryBox,
  SearchCategoryInput,
  SearchCategoryButton,
  SearchSelectStyle,
} from '../SearchStyle';

const SearchBar = () => {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.basicInfo.categoriesList);

  const {
    categoryMain,
    searchText,
    featureValuesSelectedList,
  } = useSelector((state) => state.search);

  const handleChangeSelect = (event) => {
    const index = event.target.selectedIndex;
    const id = categoriesList[index].categoryid;
    dispatch(CategoryMainSelected(id));
    dispatch(SearchTextEnter(''));
  };

  const handleChangeText = (event) => {
    const text = event.target.value;
    dispatch(SearchTextEnter(text));
  };

  const handleClicked = () => {
    LoadProductsList(
      dispatch,
      categoryMain,
      1,
      searchText,
      featureValuesSelectedList,
    );
    LoadProductsListLength(
      dispatch,
      categoryMain,
      1,
      searchText,
      featureValuesSelectedList,
    );
  };

  return (
    <SearchCategoryBox>
      <SearchSelectStyle
        onChange={handleChangeSelect}
      >
        {categoriesList.map((i) => (
          <option key={i.categoryid}>
            {i.categoryname}
          </option>
        ))}
      </SearchSelectStyle>
      <SearchCategoryInput
        type="text"
        onChange={handleChangeText}
        value={searchText}
      />
      <SearchCategoryButton
        type="button"
        onClick={handleClicked}
      >
        Search
      </SearchCategoryButton>
    </SearchCategoryBox>
  );
};

export default SearchBar;
