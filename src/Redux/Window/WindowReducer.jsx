import {
  windowHeight,
  windowWidth,
} from './WindowType';

const initState = {
  windowHeight: 0,
  windowWidth: 0,
};

const windowReducer = (state = initState, action) => {
  switch (action.type) {
    case windowHeight: return {
      ...state,
      windowHeight: action.payload,
    };
    case windowWidth: return {
      ...state,
      windowWidth: action.payload,
    };
    default: return state;
  }
};

export default windowReducer;
