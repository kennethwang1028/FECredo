import {
  CategorysList,
  CategoryMain,
  FeaturesList,
  FeatureMain,
  SearchText,
} from './SearchType';

export const CategorysListEnter = (categoryList = []) => ({
  type: CategorysList,
  payload: categoryList,
});

export const CategoryMainSelected = (categoryName = 'All') => ({
  type: CategoryMain,
  payload: categoryName,
});

export const FeaturesListEnter = (featuresList = []) => ({
  type: FeaturesList,
  payload: featuresList,
});

export const FeatureMainSelected = (featureName = '') => ({
  type: FeatureMain,
  payload: featureName,
});

export const SearchTextEnter = (textSearch = '') => ({
  type: SearchText,
  payload: textSearch,
});
