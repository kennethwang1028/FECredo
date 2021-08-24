import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SearchPageEnter,
  LoadProductsList,
} from '../../../Redux';

import {
  RowContainerStyle,
  SearchPageButtonStyle,
} from '../SearchStyle';

const SearchPage = () => {
  const {
    searchPage,
    productsListLength,
    categoryMain,
    searchText,
    featureValuesSelectedList,
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  let howManyPages = Math.floor(productsListLength / 5);
  if (howManyPages * 5 !== productsListLength) {
    howManyPages += 1;
  }

  const handleClickedPrev = () => {
    const num = searchPage - 1;
    dispatch(SearchPageEnter(num));
    LoadProductsList(
      dispatch,
      categoryMain,
      num,
      searchText,
      featureValuesSelectedList,
    );
  };

  const handleClickedNext = () => {
    const num = searchPage + 1;
    dispatch(SearchPageEnter(num));
    LoadProductsList(
      dispatch,
      categoryMain,
      num,
      searchText,
      featureValuesSelectedList,
    );
  };

  const handleClickedPage = (event) => {
    const num = Number(event.target.id);
    dispatch(SearchPageEnter(num));
    LoadProductsList(
      dispatch,
      categoryMain,
      num,
      searchText,
      featureValuesSelectedList,
    );
  };

  const button = (num) => (
    <SearchPageButtonStyle
      key={num}
      pageSelected={num === searchPage}
      type="button"
      id={num}
      onClick={handleClickedPage}
    >
      {num}
    </SearchPageButtonStyle>
  );

  const pageList = (page, ManyPages) => {
    if (ManyPages <= 7) {
      return (
        <RowContainerStyle>
          {[...Array(ManyPages)].map((i, index) => {
            const num = index + 1;
            return button(num);
          })}
        </RowContainerStyle>
      );
    }
    if (page <= 5) {
      return (
        <RowContainerStyle>
          {[...Array(5)].map((i, index) => {
            const num = index + 1;
            return button(num);
          })}
          <div>...</div>
          {button(ManyPages)}
        </RowContainerStyle>
      );
    }
    if (page > 5 && page + 4 <= ManyPages) {
      return (
        <RowContainerStyle>
          {button(1)}
          <div>...</div>
          {[...Array(3)].map((i, index) => {
            const num = page - 1 + index;
            return button(num);
          })}
          <div>...</div>
          {button(ManyPages)}
        </RowContainerStyle>
      );
    }
    if (page + 4 > ManyPages) {
      return (
        <RowContainerStyle>
          {button(1)}
          <div>...</div>
          {[...Array(5)].map((i, index) => {
            const num = ManyPages - 4 + index;
            return button(num);
          })}
        </RowContainerStyle>
      );
    }
    return null;
  };

  return (
    <RowContainerStyle>
      {searchPage === 1
        ? null
        : (
          <RowContainerStyle>
            <SearchPageButtonStyle
              type="button"
              onClick={handleClickedPrev}
            >
              Prev
            </SearchPageButtonStyle>
          </RowContainerStyle>
        )}
      {pageList(searchPage, howManyPages)}
      {searchPage >= howManyPages
        ? null
        : (
          <RowContainerStyle>
            <SearchPageButtonStyle
              type="button"
              onClick={handleClickedNext}
            >
              Next
            </SearchPageButtonStyle>
          </RowContainerStyle>
        )}
    </RowContainerStyle>
  );
};

export default SearchPage;
