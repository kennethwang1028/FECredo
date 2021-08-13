import {
  CategoriesList,
  FeaturesList,
} from './BasicInfoType';

export const CategoriesListEnter = (categoriesList = []) => ({
  type: CategoriesList,
  payload: categoriesList,
});

export const FeaturesListEnter = (featuresList = []) => ({
  type: FeaturesList,
  payload: featuresList,
});
