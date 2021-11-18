import {
  userBillInfo,
  userShippingInfoList,
  userShopOrderedList,
  userShopList,
  userShopCartList,
  userBillShippingInfoList,
  userShopCloneList,
} from './ShopCartType';

const initState = {
  userShopCloneList: [],
  userBillShippingInfoList: [],
  userBillInfo: {},
  userShippingInfoList: [],
  userShopOrderedList: [],
  userShopList: [],
  userShopCartList: [],
};

const shopCartReducer = (state = initState, action) => {
  switch (action.type) {
    case userBillInfo: return {
      ...state,
      userBillInfo: action.payload,
    };
    case userBillShippingInfoList: return {
      ...state,
      userBillShippingInfoList: action.payload,
    };
    case userShippingInfoList: return {
      ...state,
      userShippingInfoList: action.payload,
    };
    case userShopOrderedList: return {
      ...state,
      userShopOrderedList: action.payload,
    };
    case userShopList: return {
      ...state,
      userShopList: action.payload,
    };
    case userShopCartList: return {
      ...state,
      userShopCartList: action.payload,
    };
    case userShopCloneList: return {
      ...state,
      userShopCloneList: action.payload,
    };
    default: return state;
  }
};

export default shopCartReducer;
