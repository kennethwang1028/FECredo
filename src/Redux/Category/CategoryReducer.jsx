import {
  CategoryTypeId,
  CategoryTypeName,
  CategorySearchText,
} from './CategoryType';

const initState = {
  categoryId: 0,
  categoryName: 'All',
  searchText: '',
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoryTypeId: return {
      ...state,
      categoryId: action.payload,
    };
    case CategoryTypeName: return {
      ...state,
      categoryName: action.payload,
    };
    case CategorySearchText: return {
      ...state,
      searchText: action.payload,
    };

    default: return state;
  }
};

export default categoryReducer;
