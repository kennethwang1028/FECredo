import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FeverItems from '../Fever/FeverItems/FeverItems';
import ShopCartItem from './ShopCartItem/ShopCartItem';
import Price from './Price/Price';
import PopOutInfo from './PopOutInfo/PopOutInfo';
import OrderContainer from './OrderCard/OrderCard';

import {
  LoadBillShippingInfo,
  SetUserShopCartList,
  SetUserShippingInfoList,
  LoadOrderList,
} from '../../Redux';

import {
  ContainerStyle,
  ShopItemStyle,
  ShopItemTextStyle,
  CheckOutButtonStyle,
} from './ShopCartStyles';

const discountCodeList = [
  {
    discountCodeId: 1,
    code: '20% off',
    discountRate: 20,
  }, {
    discountCodeId: 2,
    code: 'kenneth is cute',
    discountRate: 60,
  }, {
    discountCodeId: 3,
    code: 'this is dumb!',
    discountRate: 80,
  },
];

const ShopCartContainer = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.window.countInfoWidth);

  const {
    userShopList,
    userShopCloneList,
    userShopOrderedList,
  } = useSelector((state) => state.shopCart);

  const {
    isLoadUserInfo,
    userInfo,
  } = useSelector((state) => state.user);

  const [nextTimeList, setNextTimeList] = useState([]);
  const [shopCartList, setShopCartList] = useState([]);
  const [code, setCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [saveBeforeDiscount, setSaveBeforeDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [text, setText] = useState('');
  const [isPopOutInfo, setIsPopOutInfo] = useState(false);

  useEffect(() => {
    if (isLoadUserInfo) {
      LoadBillShippingInfo({
        dispatch,
        userid: userInfo.id,
      });
      LoadOrderList({
        dispatch,
        userId: userInfo.id,
      });
    }
  }, [isLoadUserInfo]);

  useEffect(() => {
    const listOne = userShopList.filter((i) => !i.is_in_cart);
    const listTwo = userShopList.filter((i) => i.is_in_cart);
    setNextTimeList(listOne);
    setShopCartList(listTwo);
  }, [userShopList]);

  useEffect(() => {
    const onSaleDiscountList = [];
    const newList = shopCartList.concat(userShopCloneList);
    const totalBeforeDiscountList = newList.map((i) => {
      if (Number(i.on_sale) !== 0) {
        onSaleDiscountList.push(Number(i.quantity) * (Number(i.price) - Number(i.on_sale)));
      }
      return Number(i.quantity) * Number(i.price);
    });
    const total = totalBeforeDiscountList.reduce((a, b) => a + b, 0);
    const saveTotal = onSaleDiscountList.reduce((a, b) => a + b, 0);
    setPrice(total);
    setSaveBeforeDiscount(saveTotal);
  }, [shopCartList, userShopCloneList]);

  useEffect(() => {
    const taxTotal = (price * 0.0875);
    setTax(taxTotal);
  }, [price]);

  useEffect(() => {
    const save = (price - saveBeforeDiscount) * (discountRate / 100);
    setDiscount(save);
  }, [discountRate, price]);

  const handleChangeShipping = (event) => {
    setShipping(Number(event.target.value));
  };

  const handleClickApplyDiscount = () => {
    if (text !== code) {
      const list = discountCodeList.map((i) => i.code);
      const index = list.indexOf(code);
      if (index > -1) {
        const saveRate = discountCodeList[index].discountRate;
        setDiscountRate(saveRate);
        setText(code);
      } else {
        setDiscountRate(-168);
        setText(code);
      }
    } else {
      setDiscountRate(0);
      setCode('');
      setText('');
    }
  };

  const handleChangeDiscountCode = (event) => {
    setCode(event.target.value);
  };

  const handleClickedCheckout = () => {
    const newList = shopCartList.concat(userShopCloneList);
    dispatch(SetUserShopCartList(newList));
    setIsPopOutInfo(true);
  };

  const handleClickedBack = () => {
    setIsPopOutInfo(false);
    dispatch(SetUserShippingInfoList([]));
  };

  return (
    <ContainerStyle
      width={width}
    >
      <ShopItemTextStyle>Next Time Shop Cart</ShopItemTextStyle>
      <FeverItems
        productList={nextTimeList}
        showCancelbutton
        showAddtoShopCart
      />
      <ShopItemTextStyle>Shop Cart</ShopItemTextStyle>
      {(shopCartList.length + userShopCloneList.length) === 0
        ? (
          <ShopItemStyle>
            No Items yet!
          </ShopItemStyle>
        )
        : (
          <>
            {shopCartList.map((i) => (
              <ShopCartItem
                key={i.style_id}
                item={i}
              />
            ))}
            {userShopCloneList.map((i) => (
              <ShopCartItem
                key={i.clone_id}
                item={i}
                isClone
              />
            ))}
          </>
        )}
      <Price
        info={{
          isLoadUserInfo,
          discountRate,
          code,
          discount,
          shipping,
          price,
          tax,
          saveBeforeDiscount,
          handleClickApplyDiscount,
          handleChangeDiscountCode,
          handleChangeShipping,
        }}
      />
      <CheckOutButtonStyle
        type="button"
        onClick={handleClickedCheckout}
      >
        Check Out
      </CheckOutButtonStyle>
      {isPopOutInfo ? (
        <PopOutInfo
          info={{
            isEmpty: shopCartList.length === 0,
            handleClickedBack,
            isLoadUserInfo,
            priceInfo: {
              code,
              discount: discount.toFixed(2),
              shipping: shipping.toFixed(2),
              price: price.toFixed(2),
              tax: tax.toFixed(2),
              saveBeforeDiscount: saveBeforeDiscount.toFixed(2),
            },
          }}
        />
      ) : null}
      <ShopItemTextStyle>Order History</ShopItemTextStyle>
      <OrderContainer
        orderList={userShopOrderedList}
      />
    </ContainerStyle>
  );
};

export default ShopCartContainer;
