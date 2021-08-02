import { combineReducers } from 'redux';

import sideBarReducer from './SideBar/SideBarReducer';
import userReducer from './User/UserReducer';
import categoryReducer from './Category/CategoryReducer';

const rootReducer = combineReducers({
  sideBar: sideBarReducer,
  user: userReducer,
  category: categoryReducer,
});

export default rootReducer;
