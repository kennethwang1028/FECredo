import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  SetUserShippingInfoList,
  SetUserShopCartList,
} from '../../../Redux';

import {
  DivStyle,
  CheckOutButtonStyle,
  ShopItemTextStyle,
  PopOutContianerStyle,
} from '../ShopCartStyles';

const ItemInfo = (props) => {
  const {
    nextFunc,
    backFunc,
    list,
  } = props;

  const dispatch = useDispatch();

  const {
    userShopCloneList,
    userShippingInfoList,
  } = useSelector((state) => state.shopCart);

  const [isShippingToSameAddress, setIsShippingToSameAddress] = useState(true);
  const [ClickedIndexlist, setClickedIndexList] = useState([]);
  const [cloneList, setCloneList] = useState([]);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const newList = [...Array(list.length)];
    setCloneList(newList);
  }, []);

  useEffect(() => {
    const indexList = [...Array(list.length)].map((i, index) => index);
    if (isShippingToSameAddress) {
      setClickedIndexList(indexList);
    } else {
      setClickedIndexList([]);
    }
  }, [isShippingToSameAddress]);

  const handleChangeIsShoppingToSameAddress = (event) => {
    const bool = Boolean(Number(event.target.value));
    setIsShippingToSameAddress(bool);
  };

  const sizeFunc = (item) => {
    const sizeIdList = item.skus_option.map((i) => i.skusid);
    const index = sizeIdList.indexOf(item.skus_id);
    return item.skus_option[index].size;
  };

  const handleChangeCheckBox = (event) => {
    const index = Number(event.target.id);
    let newList = [...ClickedIndexlist];
    const newCloneList = [...cloneList];
    if (ClickedIndexlist.includes(index)) {
      newList = newList.filter((i) => i !== index);
      newCloneList[index] = undefined;
    } else {
      newList.push(index);
      newCloneList[index] = { ...list[index] };
    }
    setClickedIndexList(newList);
    setCloneList(newCloneList);
  };

  const handleChangeSelect = (event) => {
    const qty = Number(event.target.value);
    const index = Number(event.target.id);
    const newCloneList = [...cloneList];
    newCloneList[index].quantity = qty;
    setCloneList(newCloneList);
  };

  const handleChickedNext = () => {
    const newList = [];
    let newShippingList = [];
    if (isShippingToSameAddress) {
      newShippingList = [...list];
    } else {
      for (let i = 0; i < list.length; i += 1) {
        if (cloneList[i] !== undefined) {
          const qty = list[i].quantity;
          const cloneQty = cloneList[i].quantity;
          if (qty !== cloneQty) {
            const newObj = { ...list[i] };
            newObj.quantity = qty - cloneQty;
            newList.push(newObj);
          }
          newShippingList.push(cloneList[i]);
        } else {
          newList.push(list[i]);
        }
      }
    }
    if (newShippingList.length > 0) {
      const newUserShippingInfoList = [...userShippingInfoList];
      const shippingObj = {
        shippingAddress: null,
        itemsList: newShippingList,
      };
      newUserShippingInfoList.push(shippingObj);
      dispatch(SetUserShopCartList(newList));
      dispatch(SetUserShippingInfoList(newUserShippingInfoList));
      nextFunc();
    } else {
      setIsWarning(true);
    }
  };

  const handleChickedBack = () => {
    backFunc();
  };

  return (
    <>
      {isWarning
        ? (
          <ShopItemTextStyle>
            Select at least one item
          </ShopItemTextStyle>
        )
        : null}
      {list.length > 1 || list[0].quantity > 1
        ? (
          <DivStyle>
            <input
              type="checkbox"
              value={1}
              checked={isShippingToSameAddress}
              onChange={handleChangeIsShoppingToSameAddress}
            />
            To Same Address
            <input
              type="checkbox"
              value={0}
              checked={!isShippingToSameAddress}
              onChange={handleChangeIsShoppingToSameAddress}
            />
            To Different Address
          </DivStyle>
        )
        : null}
      {isShippingToSameAddress
        ? (
          <>
            {list.map((i) => (
              <DivStyle
                key={i.clone_id || i.style_id}
              >
                <img
                  alt="itemphotos"
                  src={i.photo}
                  width="20"
                  height="20"
                />
                {i.product_name}
                {' -- Size: '}
                {sizeFunc(i)}
                {' x '}
                {i.quantity}
              </DivStyle>
            ))}
          </>
        )
        : (
          <>
            {list.map((i, index) => (
              <DivStyle
                key={i.clone_id || i.style_id}
              >
                <div>
                  <input
                    type="checkbox"
                    id={index}
                    checked={ClickedIndexlist.includes(index)}
                    onChange={handleChangeCheckBox}
                  />
                  {' '}
                  <img
                    alt="itemphone"
                    src={i.photo}
                    width="20"
                    height="20"
                  />
                </div>
                {i.product_name}
                {' -- Size: '}
                {sizeFunc(i)}
                {' x '}
                {ClickedIndexlist.includes(index) && i.quantity > 1
                  ? (
                    <select
                      id={index}
                      onChange={handleChangeSelect}
                    >
                      {[...Array(i.quantity)].map((j, indexOfJ) => (
                        <option
                          key={indexOfJ}
                        >
                          {i.quantity - indexOfJ}
                        </option>
                      ))}
                    </select>
                  )
                  : (
                    <>
                      {i.quantity}
                    </>
                  )}
              </DivStyle>
            ))}
          </>
        )}
      <CheckOutButtonStyle
        type="button"
        onClick={handleChickedNext}
      >
        Next
      </CheckOutButtonStyle>
      <CheckOutButtonStyle
        type="button"
        onClick={handleChickedBack}
      >
        Back
      </CheckOutButtonStyle>
    </>
  );
};

export default ItemInfo;
