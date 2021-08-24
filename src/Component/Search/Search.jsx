import React from 'react';
import {
  useParams,
} from 'react-router-dom';

import SearchBar from './SearchBar/SearchBar';
import FeaturesList from './FeaturesList/FeaturesList';
import SearchPage from './SearchPage/SearchPage';
import ProductList from './ProductList/ProductList';

import {
  ColumnContainerStyle,
  RowContainerStyle,
} from './SearchStyle';

const Search = () => {
  const { categoryId } = useParams();
  const id = categoryId || 0;

  return (
    <ColumnContainerStyle>
      <SearchBar />
      <RowContainerStyle>
        <FeaturesList />
        <ProductList />
      </RowContainerStyle>
      <SearchPage />
    </ColumnContainerStyle>
  );
};

export default Search;
