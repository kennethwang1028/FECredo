import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  useParams,
} from 'react-router-dom';

import {
  CategorysListEnter,
  CategoryMainSelected,
  FeaturesListEnter,
  FeatureMainSelected,
  SearchTextEnter,
} from '../../Redux';

import {
  SearchContainer,
  Container,
} from './SearchStyle';

import SearchBar from './SearchBar/SearchBar';

import categoryData from './CategoryData';
import featureData from './FeatureData';
// fetch catrgory type list;

const Search = () => {
  const { categoryId } = useParams();
  const id = categoryId || 0;

  const width = useSelector((state) => state.window.windowWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategorysListEnter(categoryData));
    dispatch(FeaturesListEnter(featureData));
  }, []);

  return (
    <Container
      width={width}
    >
      <SearchBar />
      hi
    </Container>
  );
};

export default Search;
