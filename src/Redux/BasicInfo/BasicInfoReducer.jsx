import {
  CategoriesList,
  FeaturesList,
} from './BasicInfoType';

const initState = {
  categoriesList: [],
  featuresList: [],
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
    default: return state;
  }
};

export default basicInfoReducer;
