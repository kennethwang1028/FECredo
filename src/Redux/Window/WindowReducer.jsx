import {
  countWindowHeight,
  countWindowWidth,
  countSideBarWidth,
  countInfoWidth,
  isSideBarClicked,
} from './WindowType';

const initState = {
  countWindowHeight: 0,
  countWindowWidth: 0,
  countSideBarWidth: 0,
  countInfoWidth: 0,
  isSideBarClicked: false,
};

const windowReducer = (state = initState, action) => {
  switch (action.type) {
    case countWindowHeight: return {
      ...state,
      countWindowHeight: action.payload,
    };
    case countWindowWidth: return {
      ...state,
      countWindowWidth: action.payload,
    };
    case countSideBarWidth: return {
      ...state,
      countSideBarWidth: action.payload,
    };
    case countInfoWidth: return {
      ...state,
      countInfoWidth: action.payload,
    };
    case isSideBarClicked: return {
      ...state,
      isSideBarClicked: !state.isSideBarClicked,
    };
    default: return state;
  }
};

export default windowReducer;
