import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  CategorysListEnter,
  CategoryMainSelected,
  FeaturesListEnter,
  FeatureMainSelected,
  SearchTextEnter,
  ProductsListEnter,
} from '../../../Redux';

import {
  SearchCategoryBox,
  SearchCategoryInput,
  SearchCategoryButton,
  SearchSelect,
} from '../SearchStyle';

const SearchBar = () => {
  const dispatch = useDispatch();

  const categorysList = useSelector((state) => state.search.categorysList);
  const categoryMain = useSelector((state) => state.search.categoryMain);
  const searchText = useSelector((state) => state.search.searchText);

  const handleChangeSelect = (event) => {
    // const index = event.target.selectedIndex;
    dispatch(CategoryMainSelected(event.target.value));
    dispatch(SearchTextEnter(''));
  };

  const handleChangeText = (event) => {
    const text = event.target.value;
    dispatch(SearchTextEnter(text));
  };

  const handleClicked = () => {
    let url;
    if (categoryMain !== '' && searchText.length <= 3) {
      url = `http://localhost:3001/category/${categoryMain}`;
    } else if (categoryMain !== '' && searchText.length > 3) {
      url = `http://localhost:3001/category/${categoryMain}/${searchText}`;
    }

    axios(url)
      .then((res) => {
        const { productslist } = res.data;
        dispatch(ProductsListEnter(productslist));
      })
      .catch((err) => console.log(err));
  };

  return (
    <SearchCategoryBox>
      <SearchSelect
        onChange={handleChangeSelect}
      >
        <option>All</option>
        {categorysList.map((i) => (
          <option key={i.categoryId}>
            {i.categoryName}
          </option>
        ))}
      </SearchSelect>
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
