import { combineReducers } from 'redux';

import windowReducer from './Window/WindowReducer';
import sideBarReducer from './SideBar/SideBarReducer';
import userReducer from './User/UserReducer';
import categoryReducer from './Category/CategoryReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  sideBar: sideBarReducer,
  user: userReducer,
  category: categoryReducer,
});

export default rootReducer;
