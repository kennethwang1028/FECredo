import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  SearchPageEnter,
  ProductsListEnter,
} from '../../../Redux';

const SearchPage = () => {
  const {
    searchPage,
    productsListLength,
    categoryMain,
    searchText,
    featureValuesList,
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  let howManyPages = Math.floor(productsListLength / 5);
  if (howManyPages * 5 !== productsListLength) {
    howManyPages += 1;
  }

  const fetchProductInfo = (page) => {
    const url1 = 'http://localhost:3001/SDCredo/search';
    let url = `?categoryId=${categoryMain}&start=${page - 1}`;

    if (searchText.length <= 3) {
      url += `&searchText=${searchText}`;
    }
    if (featureValuesList.length > 0) {
      url += `&featuresList=[${featureValuesList}]`;
    }
    axios(url1 + url)
      .then((res) => {
        dispatch(ProductsListEnter(res.data));
      })
      .catch((err) => console.log(err));
  };

  const handleClickedPrev = () => {
    const num = searchPage - 1;
    dispatch(SearchPageEnter(num));
    fetchProductInfo(num);
  };

  const handleClickedNext = () => {
    const num = searchPage + 1;
    dispatch(SearchPageEnter(num));
    fetchProductInfo(num);
  };

  const handleClickedPage = (event) => {
    const num = Number(event.target.id);
    dispatch(SearchPageEnter(num));
    fetchProductInfo(num);
  };

  const button = (num) => (
    <button
      key={num}
      type="button"
      id={num}
      onClick={handleClickedPage}
    >
      {num}
    </button>
  );

  const pageList = (page, ManyPages) => {
    if (ManyPages <= 7) {
      return (
        <div>
          {[...Array(ManyPages)].map((i, index) => {
            const num = index + 1;
            return button(num);
          })}
        </div>
      );
    }
    if (page <= 5) {
      return (
        <div>
          {[...Array(5)].map((i, index) => {
            const num = index + 1;
            return button(num);
          })}
          <div>...</div>
          {button(ManyPages)}
        </div>
      );
    }
    if (page > 5 && page + 4 <= ManyPages) {
      return (
        <div>
          {button(1)}
          <div>...</div>
          {[...Array(3)].map((i, index) => {
            const num = page - 1 + index;
            return button(num);
          })}
          <div>...</div>
          {button(ManyPages)}
        </div>
      );
    }
    if (page + 4 > ManyPages) {
      return (
        <div>
          {button(1)}
          <div>...</div>
          {[...Array(5)].map((i, index) => {
            const num = ManyPages - 4 + index;
            return button(num);
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {searchPage === 1
        ? null
        : (
          <button
            type="button"
            onClick={handleClickedPrev}
          >
            Prev
          </button>
        )}
      {pageList(searchPage, howManyPages)}
      {searchPage >= howManyPages
        ? null
        : (
          <button
            type="button"
            onClick={handleClickedNext}
          >
            Next
          </button>
        )}
    </div>
  );
};

export default SearchPage;
