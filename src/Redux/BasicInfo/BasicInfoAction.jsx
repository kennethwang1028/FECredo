import {
  CategoriesList,
  FeaturesList,
} from './BasicInfoType';

export const SetCategoriesList = (categoriesList = []) => ({
  type: CategoriesList,
  payload: categoriesList,
});

export const SetFeaturesList = (featuresList = []) => ({
  type: FeaturesList,
  payload: featuresList,
});
