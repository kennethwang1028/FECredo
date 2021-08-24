import {
  CategoriesList,
  FeaturesList,
  ComsList,
} from './BasicInfoType';

const initState = {
  categoriesList: [],
  featuresList: [],
  comsList: [],
};

const basicInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoriesList: return {
      ...state,
      categoriesList: action.payload,
    };
    case FeaturesList: return {
      ...state,
      featuresList: action.payload,
    };
    case ComsList: return {
      ...state,
      comsList: action.payload,
    };
    default: return state;
  }
};

export default basicInfoReducer;
