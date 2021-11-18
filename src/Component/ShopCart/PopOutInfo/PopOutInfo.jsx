import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import BillShippingInfo from '../Info/BillShippingInfo';
import ItemInfo from '../Info/ItemInfo';
import FinalInfo from '../Info/FinalInfo';

import {
  SetUserShippingInfoList,
  SetUserShopCartList,
} from '../../../Redux';

import {
  PopOutContianerStyle,
  CheckOutButtonStyle,
  ShopItemTextStyle,
  DeleteButtonStyle,
} from '../ShopCartStyles';

const PopOutInfo = ({ info }) => {
  const {
    isEmpty,
    handleClickedBack,
    isLoadUserInfo,
    priceInfo,
  } = info;

  const history = useHistory();
  const dispatch = useDispatch();

  const {
    userShopCartList,
    userShippingInfoList,
  } = useSelector((state) => state.shopCart);

  const [isBillInfoOn, setIsBillInfoOn] = useState(false);
  const [isItemsInfoOn, setIsItemsInfoOn] = useState(false);
  const [isShippingInfoOn, setIsShippingInfoOn] = useState(false);

  const [isOpenShippingInfo, setIsOpenShippingInfo] = useState(false);
  const [isUserShopCartLisEmpty, setIsUserShopCartLisEmpty] = useState(false);

  // useEffect(() => {
  //   if (userShopCartList.length > 0) {
  //     setIsUserShopCartLisEmpty(false);
  //   } else {
  //     setIsUserShopCartLisEmpty(true);
  //   }
  // }, [userShopCartList]);

  const resetShopCartList = () => {
    const newShopCartList = [...userShopCartList];
    const newShippingInfoList = [...userShippingInfoList];
    const newObj = newShippingInfoList.pop();
    const shopCartSkusIdList = newShopCartList.map((s) => s.skus_id);
    const { itemsList } = newObj;
    for (let i = 0; i < itemsList.length; i += 1) {
      const index = shopCartSkusIdList.indexOf(itemsList[i].skus_id);
      if (index > -1) {
        newShopCartList[index].quantity += itemsList[i].quantity;
      } else {
        newShopCartList.push(itemsList[i]);
      }
    }
    dispatch(SetUserShopCartList(newShopCartList));
    dispatch(SetUserShippingInfoList(newShippingInfoList));
  };

  const handleClickedLogIn = () => {
    history.push('/login');
  };

  const handleClickedSignUp = () => {
    history.push('/signup');
  };

  const handleClickedIsNext = () => {
    setIsBillInfoOn(!isBillInfoOn);
  };

  const handleClickedIsToItemsInfo = () => {
    const len = userShippingInfoList.length;
    const cartLen = userShopCartList.length;
    if (cartLen > 0) {
      if (!isItemsInfoOn) {
        setIsItemsInfoOn(true);
      } else if (len > 0) {
        setIsShippingInfoOn(true);
      } else {
        setIsItemsInfoOn(false);
      }
    } else {
      setIsUserShopCartLisEmpty(true);
    }
  };

  const handleClickedIsToShippingInfo = () => {
    if (!isShippingInfoOn) {
      setIsShippingInfoOn(true);
    } else {
      resetShopCartList();
      setIsShippingInfoOn(false);
    }
  };

  const handleClickedToFinalCheckedList = () => {
    const len = userShopCartList.length;
    if (len > 0) {
      setIsShippingInfoOn(false);
    } else {
      setIsUserShopCartLisEmpty(true);
    }
  };

  const EditBillFunc = () => {
    setIsItemsInfoOn(false);
    setIsShippingInfoOn(false);
    setIsUserShopCartLisEmpty(false);
    setIsBillInfoOn(true);
  };

  const EditShippingFunc = (index) => {
    const obj = userShippingInfoList[index];
    const newList = [...userShippingInfoList];
    newList.splice(index, 1);
    dispatch(SetUserShopCartList(obj.itemsList));
    dispatch(SetUserShippingInfoList(newList));
    setIsUserShopCartLisEmpty(false);
    setIsShippingInfoOn(false);
    setIsItemsInfoOn(true);
  };

  const PopOutRender = () => {
    if (isEmpty) {
      return (
        <>
          <ShopItemTextStyle>
            ShopCart is Empty !!
          </ShopItemTextStyle>
          <CheckOutButtonStyle
            type="button"
            onClick={handleClickedBack}
          >
            back
          </CheckOutButtonStyle>
        </>
      );
    }
    if (!isLoadUserInfo) {
      return (
        <>
          <ShopItemTextStyle>
            Please Log In Frist!
          </ShopItemTextStyle>
          <CheckOutButtonStyle
            type="button"
            onClick={handleClickedLogIn}
          >
            Log In
          </CheckOutButtonStyle>
          <CheckOutButtonStyle
            type="button"
            onClick={handleClickedSignUp}
          >
            Sign Up
          </CheckOutButtonStyle>
          <CheckOutButtonStyle
            type="button"
            onClick={handleClickedBack}
          >
            Back
          </CheckOutButtonStyle>
        </>
      );
    }
    return (
      <>
        <ShopItemTextStyle>
          Credit Card Info
        </ShopItemTextStyle>
        <ShopItemTextStyle>
          Not Avaible!!
          PUT CREDIT CARD COMPONET HERE!
        </ShopItemTextStyle>
        <CheckOutButtonStyle
          type="button"
          onClick={handleClickedIsNext}
        >
          Next
        </CheckOutButtonStyle>
        <CheckOutButtonStyle
          type="button"
          onClick={handleClickedBack}
        >
          Back
        </CheckOutButtonStyle>
      </>
    );
  };

  const PopOutShippingInfoRender = () => {
    if (isUserShopCartLisEmpty) {
      return (
        <>
          <DeleteButtonStyle
            type="button"
            onClick={handleClickedBack}
          />
          <FinalInfo
            EditBillFunc={EditBillFunc}
            EditShippingFunc={EditShippingFunc}
            priceInfo={priceInfo}
          />
        </>
      );
    }

    if (isShippingInfoOn) {
      return (
        <>
          <DeleteButtonStyle
            type="button"
            onClick={handleClickedBack}
          />
          <BillShippingInfo
            text="Shipping"
            isDefault
            nextFunc={handleClickedToFinalCheckedList}
            backFunc={handleClickedIsToShippingInfo}
          />
        </>
      );
    }

    if (isItemsInfoOn) {
      return (
        <>
          <DeleteButtonStyle
            type="button"
            onClick={handleClickedBack}
          />
          <ShopItemTextStyle>
            Items Info
          </ShopItemTextStyle>
          <ItemInfo
            list={userShopCartList}
            nextFunc={handleClickedIsToShippingInfo}
            backFunc={handleClickedIsToItemsInfo}
          />
        </>
      );
    }

    if (isBillInfoOn) {
      return (
        <>
          <DeleteButtonStyle
            type="button"
            onClick={handleClickedBack}
          />
          <BillShippingInfo
            text="Bill"
            isDefault
            nextFunc={handleClickedIsToItemsInfo}
            backFunc={handleClickedIsNext}
          />
        </>
      );
    }
    return null;
  };

  return (
    <PopOutContianerStyle>
      {!isBillInfoOn ? PopOutRender() : PopOutShippingInfoRender()}
    </PopOutContianerStyle>
  );
};

PopOutInfo.propTypes = {
  info: PropTypes.shape({
    isEmpty: PropTypes.bool,
    handleClickedBack: PropTypes.func,
    isLoadUserInfo: PropTypes.bool,
  }),
};

PopOutInfo.defaultProps = {
  info: {
    isLoadUserInfo: false,
    isEmpty: true,
    handleClickedBack: () => {},
  },
};

export default PopOutInfo;
