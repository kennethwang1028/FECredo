import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  PostBillShippingInfo,
  PostOrderInfo,
  UpdateShopCartList,
} from '../../../Redux';

import {
  DivStyle,
  CheckOutButtonStyle,
  ShopItemTextStyle,
} from '../ShopCartStyles';

const FinalInfo = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    EditBillFunc,
    EditShippingFunc,
    priceInfo,
  } = props;

  const {
    userBillInfo,
    userBillShippingInfoList,
    userShippingInfoList,
    userShopList,
  } = useSelector((state) => state.shopCart);

  const [newOrderNumber, setNewOrderNumber] = useState(null);
  const [isShippingAddressNeedToUpdate, setIsShippingAddressNeedToUpdate] = useState(false);
  const [isAddressNeedtoUpdate, setIsAddressNeedtoUpdate] = useState(true);

  const sizeFunc = (item) => {
    const sizeIdList = item.skus_option.map((i) => i.skusid);
    const index = sizeIdList.indexOf(item.skus_id);
    return item.skus_option[index].size;
  };

  const handleClickedCheckOut = () => {
    const obj = { ...priceInfo };
    const billId = userBillInfo.fec_user_bill_shipping_info_id || null;
    obj.fec_user_id = userBillInfo.fec_user_id;
    obj.bill_address = billId;
    obj.shop_date = Date();
    PostOrderInfo({
      dispatch,
      orderInfo: obj,
      func: setNewOrderNumber,
    });
  };

  const renderAddressInfo = (info) => (
    <>
      <DivStyle>
        First Name:
        {' '}
        {info.fec_user_first_name}
      </DivStyle>
      <DivStyle>
        Last Name:
        {' '}
        {info.fec_user_last_name}
      </DivStyle>
      <DivStyle>
        Phone Number:
        {' '}
        {info.fec_user_phone}
      </DivStyle>
      <DivStyle>
        Email Address:
        {' '}
        {info.fec_user_email}
      </DivStyle>
      <DivStyle>
        Bill Address:
        {' '}
        {info.fec_user_city}
        {' '}
        {info.fec_user_zip_code}
      </DivStyle>
    </>
  );

  const addingAddressfunc = () => {
    const indexList = userShippingInfoList.map((i) => i.shippingAddress);
    const updateInfoList = [];
    const updateIndexList = [];
    for (let i = 0; i < indexList.length; i += 1) {
      const index = indexList[i];
      if (!userBillShippingInfoList[index].fec_user_bill_shipping_info_id) {
        updateInfoList.push(userBillShippingInfoList[index]);
        updateIndexList.push(index);
      }
    }
    const billIndex = userBillInfo.index;
    if (billIndex !== undefined && !updateIndexList.includes(billIndex)) {
      updateIndexList.unshift(billIndex);
      updateInfoList.unshift(userBillShippingInfoList[billIndex]);
    }
    if (updateInfoList.length !== 0) {
      PostBillShippingInfo({
        dispatch,
        billShippingInfoList: updateInfoList,
        indexList: updateIndexList,
        billShippingList: userBillShippingInfoList,
        func: setIsShippingAddressNeedToUpdate,
      });
    } else {
      setIsShippingAddressNeedToUpdate(true);
    }
    setIsAddressNeedtoUpdate(false);
  };

  const addItemsShippingAddressFunc = () => {
    const list = [...userShippingInfoList];
    const idList = [];
    const needToPostList = [];
    for (let i = 0; i < list.length; i += 1) {
      const addressIndex = list[i].shippingAddress;
      const addressId = userBillShippingInfoList[addressIndex].fec_user_bill_shipping_info_id;
      const { itemsList } = list[i];
      for (let j = 0; j < itemsList.length; j += 1) {
        const obj = { ...itemsList[j] };
        const id = obj.fec_user_shop_cart_id;
        obj.order_id = newOrderNumber;
        obj.shipping_address = addressId;
        obj.is_in_cart = false;
        if (!idList.includes(id)) {
          idList.push(id);
        }
        needToPostList.push(obj);
      }
    }
    const newList = [];
    for (let i = 0; i < userShopList.length; i += 1) {
      if (!userShopList[i].is_in_cart) {
        newList.push(userShopList[i]);
      }
    }
    UpdateShopCartList({
      dispatch,
      userId: userShopList[0].fec_user_id,
      deleteList: idList,
      addList: needToPostList,
      list: newList,
    });
    setIsShippingAddressNeedToUpdate(false);
  };

  const okayFunc = () => {
    history.push('./home');
  };

  return (
    <>
      {!newOrderNumber
        ? (
          <>
            <ShopItemTextStyle>
              Bill Info
            </ShopItemTextStyle>
            {renderAddressInfo(userBillInfo)}
            <button
              type="button"
              onClick={EditBillFunc}
            >
              Edit
            </button>
            <ShopItemTextStyle>
              Shipping Info
            </ShopItemTextStyle>
            <>
              {userShippingInfoList.map((i, index) => (
                <div
                  key={i.shippingAddress}
                >
                  <DivStyle>
                    {`${index + 1}. `}
                  </DivStyle>
                  <DivStyle>
                    --- Shipping Address ---
                  </DivStyle>
                  {renderAddressInfo(userBillShippingInfoList[i.shippingAddress])}
                  <DivStyle>
                    --- Items ---
                  </DivStyle>
                  {i.itemsList.map((k) => (
                    <DivStyle
                      key={k.clone_id || k.style_id}
                    >
                      <img
                        alt="itemphotos"
                        src={k.photo}
                        width="20"
                        height="20"
                      />
                      {k.product_name}
                      {' -- Size: '}
                      {sizeFunc(k)}
                      {' x '}
                      {k.quantity}
                    </DivStyle>
                  ))}
                  <button
                    type="button"
                    onClick={() => EditShippingFunc(index)}
                  >
                    Edit
                  </button>
                </div>
              ))}
            </>
            <CheckOutButtonStyle
              type="button"
              onClick={handleClickedCheckOut}
            >
              Check Out
            </CheckOutButtonStyle>
          </>
        )
        : (
          <>
            {isAddressNeedtoUpdate ? addingAddressfunc() : null}
            {isShippingAddressNeedToUpdate ? addItemsShippingAddressFunc() : null}
            <ShopItemTextStyle>
              Your order have been placed!
            </ShopItemTextStyle>
            <ShopItemTextStyle>
              Order Number :
              {' '}
              {newOrderNumber}
            </ShopItemTextStyle>
            <CheckOutButtonStyle
              type="button"
              onClick={okayFunc}
            >
              Okay
            </CheckOutButtonStyle>
          </>
        )}
    </>
  );
};

export default FinalInfo;
