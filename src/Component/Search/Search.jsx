import React, { useEffect } from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  useParams,
} from 'react-router-dom';

import {
  CategorysListEnter,
  CategoryMainSelected,
  SetFeaturesList,
  FeatureMainSelected,
  SearchTextEnter,
} from '../../Redux';

import SearchBar from './SearchBar/SearchBar';
import FeaturesList from './FeaturesList/FeaturesList';
import SearchPage from './SearchPage/SearchPage';

import {
  Container,
} from './SearchStyle';

const Search = () => {
  const { categoryId } = useParams();
  const id = categoryId || 0;

  const width = useSelector((state) => state.window.windowWidth);

  return (
    <Container
      width={width}
    >
      <SearchBar />
      <FeaturesList />
      <SearchPage />
    </Container>
  );
};

export default Search;
