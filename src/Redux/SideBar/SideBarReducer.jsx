import { IconListClicked } from './SideBarType';

const initState = {
  isIconListClicked: false,
};

const sideBarReducer = (state = initState, action) => {
  switch (action.type) {
    case IconListClicked: return {
      ...state,
      isIconListClicked: !state.isIconListClicked,
    };
    default: return state;
  }
};

export default sideBarReducer;
