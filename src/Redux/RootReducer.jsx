import { combineReducers } from 'redux';

import windowReducer from './Window/WindowReducer';
import userReducer from './User/UserReducer';
import basicInfoReducer from './BasicInfo/BasicInfoReducer';
import productReducer from './Product/ProductReducer';
import searchReducer from './Search/SearchReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  user: userReducer,
  basicInfo: basicInfoReducer,
  product: productReducer,
  search: searchReducer,
});

export default rootReducer;
