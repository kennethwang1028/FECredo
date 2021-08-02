import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  CategoryNameSelected,
  CategoryIdSelected,
  CategoryTextSearch,
} from '../../../Redux';

import {
  SearchCategoryBox,
  SearchCategoryInput,
  SearchCategoryButton,
} from '../SearchStyle';

const SearchCategoryTop = (props) => {
  const { searchCategoryData } = props;

  const categoryName = useSelector((state) => state.category.categoryName);
  const categoryId = useSelector((state) => state.category.categoryId);
  const searchText = useSelector((state) => state.category.searchText);
  const dispatch = useDispatch();

  const [category, setCategory] = useState(categoryName);
  const [text, setText] = useState(searchText);
  const [categoryID, setCategoryID] = useState(categoryId);

  const handleChangeSelect = (event) => {
    const index = event.target.selectedIndex - 1;
    setCategory(event.target.value);
    setText('');
    setCategoryID(searchCategoryData[index].id);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleClicked = () => {
    console.log(searchText, category);
    dispatch(CategoryNameSelected(category));
    dispatch(CategoryIdSelected(categoryID));
    dispatch(CategoryTextSearch(text));
  };

  return (
    <SearchCategoryBox>
      <select
        style={{ fontSize: '3vw', display: 'flex' }}
        onChange={handleChangeSelect}
      >
        <option>All</option>
        {searchCategoryData.map((i) => (<option key={i.id}>{i.category}</option>))}
      </select>
      <SearchCategoryInput
        type="text"
        onChange={handleChangeText}
        value={text}
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

export default SearchCategoryTop;
