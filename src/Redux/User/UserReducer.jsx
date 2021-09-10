import {
  userType,
  isUserEmailVailed,
  isUserPasswordVailed,
  userInfo,
  isLoadUserInfo,
  userFeverList,
} from './UserType';

const initState = {
  userType: 'user',
  isUserEmailVailed: null,
  isUserPasswordVailed: null,
  userInfo: {},
  isLoadUserInfo: false,
  userFeverList: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userType: return {
      ...state,
      userType: action.payload,
    };
    case isUserEmailVailed: return {
      ...state,
      isUserEmailVailed: action.payload,
    };
    case isUserPasswordVailed: return {
      ...state,
      isUserPasswordVailed: action.payload,
    };
    case userInfo: return {
      ...state,
      userInfo: action.payload,
    };
    case isLoadUserInfo: return {
      ...state,
      isLoadUserInfo: action.payload,
    };
    case userFeverList: return {
      ...state,
      userFeverList: action.payload,
    };
    default: return state;
  }
};

export default userReducer;
