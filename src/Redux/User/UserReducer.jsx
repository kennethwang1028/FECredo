import {
  userName,
  userEmail,
  userPassword,
  userCity,
} from './UserType';

const initState = {
  userName: '',
  userEmail: '',
  userPassword: '',
  userCity: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userName: return {
      ...state,
      userName: action.payload,
    };
    case userEmail: return {
      ...state,
      userEmail: action.payload,
    };
    case userPassword: return {
      ...state,
      userPassword: action.payload,
    };
    case userCity: return {
      ...state,
      userCity: action.payload,
    };
    default: return state;
  }
};

export default userReducer;
