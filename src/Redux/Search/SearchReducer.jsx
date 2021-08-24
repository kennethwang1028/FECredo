import {
  CategoryMain,
  FeatureValuesList,
  SearchText,
  ProductsList,
  ProductsListLength,
  SearchPage,
} from './SearchType';

const initState = {
  categoryMain: 0,
  featureValuesList: [],
  searchText: '',
  productsList: [],
  productsListLength: 0,
  searchPage: 1,
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoryMain: return {
      ...state,
      categoryMain: action.payload,
    };
    case FeatureValuesList: return {
      ...state,
      featureValuesList: action.payload,
    };
    case SearchText: return {
      ...state,
      searchText: action.payload,
    };
    case ProductsList: return {
      ...state,
      productsList: action.payload,
    };
    case ProductsListLength: return {
      ...state,
      productsListLength: action.payload,
    };
    case SearchPage: return {
      ...state,
      searchPage: action.payload,
    };
    default: return state;
  }
};

export default searchReducer;
