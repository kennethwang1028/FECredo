import {
  CategorysList,
  CategoryMain,
  FeaturesList,
  FeatureMain,
  SearchText,
  ProductsList,
} from './SearchType';

const initState = {
  categorysList: [],
  categoryMain: '', // need to change to id number;
  featuresList: [],
  featureMain: '', // need to change to id number;
  searchText: '',
  productsList: [],
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case CategorysList: return {
      ...state,
      categorysList: action.payload,
    };
    case CategoryMain: return {
      ...state,
      categoryMain: action.payload,
    };
    case FeaturesList: return {
      ...state,
      featuresList: action.payload,
    };
    case FeatureMain: return {
      ...state,
      featureMain: action.payload,
    };
    case SearchText: return {
      ...state,
      searchText: action.payload,
    };
    case ProductsList: return {
      ...state,
      productsList: action.payload,
    };
    default: return state;
  }
};

export default searchReducer;
