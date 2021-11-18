import {
  userType,
  isUserEmailVailed,
  isUserPasswordVailed,
  userInfo,
  isLoadUserInfo,
  userFeverList,
  isUserEmailExited,
  userFriendsList,
  userOrderList,
} from './UserType';

const initState = {
  isUserEmailExited: false,
  userType: 'user',
  isUserEmailVailed: null,
  isUserPasswordVailed: null,
  userInfo: {},
  isLoadUserInfo: false,
  userFeverList: [],
  userFriendsList: [],
  userOrderList: [],
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
    case userFriendsList: return {
      ...state,
      userFriendsList: action.payload,
    };
    case isUserEmailExited: return {
      ...state,
      isUserEmailExited: action.payload,
    };
    case userOrderList: return {
      ...state,
      userOrderList: action.payload,
    };
    default: return state;
  }
};

export default userReducer;
