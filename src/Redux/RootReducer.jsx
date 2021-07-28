import { combineReducers } from 'redux';

import sideBarReducer from './SideBar/SideBarReducer';
import userReducer from './User/UserReducer';

const rootReducer = combineReducers({
  sideBar: sideBarReducer,
  user: userReducer,
});

export default rootReducer;
