import axios from 'axios';

import {
  CategoriesList,
  FeaturesList,
  ComsList,
} from './BasicInfoType';

export const SetCategoriesList = (categoriesList = []) => ({
  type: CategoriesList,
  payload: categoriesList,
});

export const SetFeaturesList = (featuresList = []) => ({
  type: FeaturesList,
  payload: featuresList,
});

export const SetComsList = (comsList = []) => ({
  type: ComsList,
  payload: comsList,
});

export const FetchCategoriesList = (dispatch) => {
  axios('http://localhost:3001/SDCredo/Categories')
    .then((data) => {
      const arr = [{ categoryid: 0, categoryname: 'All' }].concat(data.data);
      dispatch(SetCategoriesList(arr));
    });
};

export const FetchFeaturesList = (dispatch) => {
  axios('http://localhost:3001/SDCredo/Features')
    .then((data) => {
      dispatch(SetFeaturesList(data.data));
    })
    .catch((err) => console.log(err));
};

export const FetchComsList = (dispatch) => {
  axios('http://localhost:3001/SDCredo/Coms')
    .then((data) => {
      dispatch(SetComsList(data.data));
    })
    .catch((err) => console.log(err));
};
