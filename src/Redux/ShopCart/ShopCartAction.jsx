import axios from 'axios';

import {
  userBillInfo,
  userShippingInfoList,
  userShopOrderedList,
  userShopList,
  userBillShippingInfoList,
  userShopCartList,
  userShopCloneList,
} from './ShopCartType';

export const SetUserBillInfo = (info = {}) => ({
  type: userBillInfo,
  payload: info,
});

export const SetUserBillShippingInfoList = (list = []) => ({
  type: userBillShippingInfoList,
  payload: list,
});

export const SetUserShippingInfoList = (list = []) => ({
  type: userShippingInfoList,
  payload: list,
});

export const SetUserShopOrderedList = (list = []) => ({
  type: userShopOrderedList,
  payload: list,
});

export const SetUserShopList = (list = []) => ({
  type: userShopList,
  payload: list,
});

export const SetUserShopCartList = (list = []) => ({
  type: userShopCartList,
  payload: list,
});

export const SetuserShopCloneList = (list = []) => ({
  type: userShopCloneList,
  payload: list,
});

export const PostUserShoplist = ({
  dispatch = () => {},
  shopCartListInfo = {},
  list = [],
}) => {
  axios.post('http://localhost:3001/SDCredo/fecusershopcart', {
    shopCartListInfo,
  })
    .then((res) => {
      const {
        shopList,
        userId,
      } = shopCartListInfo;
      const { data } = res;
      if (shopList.length === data.length) {
        for (let i = 0; i < data.length; i += 1) {
          if (shopList[i].style_id === data[i].style_id) {
            shopList[i].fec_user_shop_cart_id = data[i].fec_user_shop_cart_id;
            shopList[i].fec_user_id = userId;
          }
        }
      }
      const newList = shopList.concat(list);
      const newShopList = [];
      for (let i = 0; i < newList.length; i += 1) {
        if (!newList[i].order_id) {
          newShopList.push(newList[i]);
        }
      }
      dispatch(SetUserShopList(newShopList));
    })
    .catch();
};

export const DeleteUserShopList = ({
  dispatch = () => {},
  shopcartidlist = [],
  list = [],
}) => {
  axios.delete(`http://localhost:3001/SDCredo/fecusershopcart/delete/${shopcartidlist}`)
    .then(() => {
      dispatch(SetUserShopList(list));
    })
    .catch();
};

export const LoadUserShopList = ({
  dispatch = () => {},
  userid = 0,
  shopList = [],
}) => {
  axios(`http://localhost:3001/SDCredo/fecusershopcart/${userid}`)
    .then((res) => {
      if (shopList.length > 0) {
        const list = [...res.data];
        const shopIdList = shopList.map((i) => i.style_id);
        const notIncludesList = [];
        const includesList = [];
        for (let i = 0; i < list.length; i += 1) {
          if (shopIdList.includes(list[i].style_id)) {
            includesList.push(list[i].fec_user_shop_cart_id);
          } else {
            notIncludesList.push(list[i]);
          }
        }
        const obj = {
          shopList,
          userId: userid,
        };
        PostUserShoplist({
          dispatch,
          shopCartListInfo: obj,
          list: notIncludesList,
        });
        if (includesList.length > 0) {
          DeleteUserShopList({
            shopcartidlist: includesList,
          });
        }
      } else {
        dispatch(SetUserShopList(res.data));
      }
    })
    .catch();
};

export const UpdateUserShopList = ({
  dispatch = () => {},
  shopcartid = 0,
  list = [],
}) => {
  axios.delete(`http://localhost:3001/SDCredo/fecusershopcart/delete/${shopcartid}`)
    .then(() => {
      dispatch(SetUserShopList(list));
    })
    .catch();
};

export const LoadShopItemInfo = ({
  dispatch = () => {},
  itemStyleId = 0,
  list = [],
}) => {
  axios(`http://localhost:3001/SDCredo/fecusershopcartiteminfo/${itemStyleId}`)
    .then((res) => {
      const { data } = res;
      const newList = list.map((i) => {
        if (i.style_id === itemStyleId) {
          const obj = { ...i };
          if (obj.style_id === data.style_id) {
            obj.style_name = data.style_name;
            obj.on_sale = data.on_sale;
            obj.is_in_cart = true;
            const option = data.skus_option;
            if (option === null) {
              obj.skus_option = [];
            } else {
              obj.skus_option = [...option];
            }
          }
          return obj;
        }
        return i;
      });
      dispatch(SetUserShopList(newList));
    })
    .catch();
};

export const LoadBillShippingInfo = ({
  dispatch = () => {},
  userid = 0,
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserbillshippinginfo/${userid}`)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch(SetUserBillShippingInfoList(res.data));
      }
    })
    .catch();
};

export const PostBillShippingInfo = ({
  dispatch = () => {},
  billShippingInfoList = [],
  billShippingList = [],
  indexList = [],
  func = () => {},
}) => {
  axios.post('http://localhost:3001/SDCredo/fecuserbillshippinginfo/add', {
    billShippingInfoList,
  })
    .then((res) => {
      const newList = res.data;
      const newBillShippingList = { ...billShippingList };
      for (let i = 0; i < indexList.length; i += 1) {
        newBillShippingList[indexList[i]] = newList[i];
      }
      dispatch(SetUserBillShippingInfoList(newBillShippingList));
      func(true);
    })
    .catch();
};

export const PostOrderInfo = ({
  dispatch = () => {},
  orderInfo = {},
  func = () => {},
}) => {
  axios.post('http://localhost:3001/SDCredo/fecuserorder/add', {
    orderInfo,
  })
    .then((res) => {
      console.log(res.data.order_id);
      func(res.data.order_id);
    })
    .catch();
};

export const UpdateOrderBillInfo = ({
  dispatch = () => {},
  orderId = 0,
  BillId = 0,
  func = () => {},
}) => {
  axios.put(`http://localhost:3001/SDCredo/fecuserorder/update/${orderId}/${BillId}`)
    .then((res) => {
      console.log(res.data.order_id);
      func(res.data.order_id);
    })
    .catch();
};

export const UpdateShopCartList = ({
  dispatch = () => {},
  deleteList = [],
  addList = [],
  userId = 0,
  list = [],
}) => {
  const obj = {
    shopList: addList,
    userId,
  };
  PostUserShoplist({
    dispatch,
    shopCartListInfo: obj,
    list,
  });
  DeleteUserShopList({
    dispatch,
    shopcartidlist: deleteList,
    list,
  });
};

export const LoadOrderList = ({
  dispatch = () => {},
  userId = 0,
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserorder/list/${userId}`)
    .then((res) => {
      if (res.data.length > 0) {
        dispatch(SetUserShopOrderedList(res.data));
      }
    })
    .catch();
};

export const LoadOrderDetail = ({
  dispatch = () => {},
  orderid = 0,
  list = [],
  func = () => {},
  booleanFunc = () => {},
}) => {
  axios(`http://localhost:3001/SDCredo/fecuserorder/detail/${orderid}`)
    .then((res) => {
      const newList = list.map((i) => {
        if (i.order_id === orderid) {
          const obj = { ...i };
          obj.orderDetail = res.data;
          func(obj);
          return obj;
        }
        return i;
      });
      dispatch(SetUserShopOrderedList(newList));
      booleanFunc(true);
    })
    .catch();
};
