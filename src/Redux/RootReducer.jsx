import { combineReducers } from 'redux';

import windowReducer from './Window/WindowReducer';
import sideBarReducer from './SideBar/SideBarReducer';
import userReducer from './User/UserReducer';
import basicInfoReducer from './BasicInfo/BasicInfoReducer';
import productReducer from './Product/ProductReducer';
import searchReducer from './Search/SearchReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  sideBar: sideBarReducer,
  user: userReducer,
  basicInfo: basicInfoReducer,
  product: productReducer,
  search: searchReducer,
});

export default rootReducer;
