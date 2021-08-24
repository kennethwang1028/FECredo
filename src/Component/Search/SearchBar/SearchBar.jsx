import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  CategoryMainSelected,
  SearchTextEnter,
  SearchPageEnter,
  ProductsListEnter,
  ProductsListLengthEnter,
} from '../../../Redux';

import {
  SearchCategoryBox,
  SearchCategoryInput,
  SearchCategoryButton,
  SearchSelect,
} from '../SearchStyle';

const SearchBar = () => {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.basicInfo.categoriesList);
  const {
    categoryMain,
    searchText,
    featureValuesList,
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
    const url1 = 'http://localhost:3001/SDCredo/searchLength';
    const url2 = 'http://localhost:3001/SDCredo/search';
    let url = `?categoryId=${categoryMain}&start=0`;

    if (searchText.length <= 3) {
      url += `&searchText=${searchText}`;
    }
    if (featureValuesList.length > 0) {
      url += `&featuresList=[${featureValuesList}]`;
    }
    axios(url2 + url)
      .then((res) => {
        dispatch(ProductsListEnter(res.data));
      })
      .catch((err) => console.log(err));
    axios(url1 + url)
      .then((res) => {
        const len = res.data[0].count;
        dispatch(ProductsListLengthEnter(len));
        dispatch(SearchPageEnter(1));
      })
      .catch((err) => console.log(err));
  };

  return (
    <SearchCategoryBox>
      <SearchSelect
        onChange={handleChangeSelect}
      >
        {categoriesList.map((i) => (
          <option key={i.categoryid}>
            {i.categoryname}
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
