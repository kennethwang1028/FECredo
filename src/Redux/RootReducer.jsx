import { combineReducers } from 'redux';

import windowReducer from './Window/WindowReducer';
import userReducer from './User/UserReducer';
import basicInfoReducer from './BasicInfo/BasicInfoReducer';
import productReducer from './Product/ProductReducer';
import searchReducer from './Search/SearchReducer';
import shopCartReducer from './ShopCart/ShopCartReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  user: userReducer,
  shopCart: shopCartReducer,
  basicInfo: basicInfoReducer,
  product: productReducer,
  search: searchReducer,
});

export default rootReducer;
