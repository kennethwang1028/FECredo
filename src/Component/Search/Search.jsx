import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  useParams,
} from 'react-router-dom';

import {
  SearchContainer,
  Container,
} from './SearchStyle';

import SearchCategoryTop from './SearchCategoryTop/SearchCategoryTop';

import categoryData from './CategoryData';
import featureData from './FeatureData';
// fetch catrgory type list;

const Search = () => {
  const { categoryId } = useParams();
  const id = categoryId || 0;

  const width = useSelector((state) => state.window.windowWidth);

  useEffect(() => {

  }, []);

  return (
    <Container
      width={width}
    >
      <SearchCategoryTop
        categoryData={categoryData}
      />
    </Container>
  );
};

export default Search;
