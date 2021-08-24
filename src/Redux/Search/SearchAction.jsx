import axios from 'axios';

import {
  CategoryMain,
  featureValuesSelectedList,
  SearchText,
  ProductsList,
  ProductsListLength,
  SearchPage,
} from './SearchType';

export const CategoryMainSelected = (categoryName = 'All') => ({
  type: CategoryMain,
  payload: categoryName,
});

export const SetFeatureValuesSelectedList = (featureIdList = []) => ({
  type: featureValuesSelectedList,
  payload: featureIdList,
});

export const SearchTextEnter = (textSearch = '') => ({
  type: SearchText,
  payload: textSearch,
});

export const ProductsListEnter = (productsList = []) => ({
  type: ProductsList,
  payload: productsList,
});

export const ProductsListLengthEnter = (productsListLength = 0) => ({
  type: ProductsListLength,
  payload: productsListLength,
});

export const SearchPageEnter = (page = 0) => ({
  type: SearchPage,
  payload: page,
});

export const LoadProductsList = (
  dispatch = () => {}, category = 0, page = 1, text = '', list = [],
) => {
  const url1 = 'http://localhost:3001/SDCredo/search';
  let url = `?categoryId=${category}&start=${page - 1}`;

  if (text.length <= 3) {
    url += `&searchText=${text}`;
  }
  if (list.length > 0) {
    url += `&featuresList=[${list}]`;
  }
  axios(url1 + url)
    .then((res) => {
      dispatch(ProductsListEnter(res.data));
    })
    .catch((err) => console.log(err));
};

export const LoadProductsListLength = (
  dispatch = () => {}, category = 0, page = 1, text = '', list = [],
) => {
  const url1 = 'http://localhost:3001/SDCredo/searchLength';
  let url = `?categoryId=${category}&start=${page - 1}`;

  if (text.length <= 3) {
    url += `&searchText=${text}`;
  }
  if (list.length > 0) {
    url += `&featuresList=[${list}]`;
  }
  axios(url1 + url)
    .then((res) => {
      const len = res.data[0].count;
      dispatch(ProductsListLengthEnter(len));
      dispatch(SearchPageEnter(1));
    })
    .catch((err) => console.log(err));
};
