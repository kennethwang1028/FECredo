import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import InfoCardSmall from '../../InfoCard/InfoCardSmall/InfoCardSmall';

import {
  DeletedUserFever,
  DeleteUserShopList,
  SetUserShopList,
  LoadShopItemInfo,
} from '../../../Redux';

import {
  RowContainer,
  FeverButton,
  FeverItemDeletedButton,
  FeverItemContainer,
} from '../FeverStyle';

const FeverItems = (props) => {
  const {
    categoryid,
    productList,
    showCancelbutton,
    showAddtoShopCart,
  } = props;

  const dispatch = useDispatch();

  const {
    countInfoWidth,
  } = useSelector((state) => state.window);
  const {
    userShopList,
  } = useSelector((state) => state.shopCart);

  const [howManyItemsToShow, setHowManyItemsToShow] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    if (countInfoWidth <= 500) {
      setHowManyItemsToShow(Math.floor(400 / 120));
    } else {
      setHowManyItemsToShow(Math.floor((countInfoWidth - 100) / 120));
    }
  }, [countInfoWidth]);

  useEffect(() => {
    const listone = [...productList];
    if (categoryid && categoryid !== 0) {
      const list = listone.filter((i) => i.category_id === categoryid);
      setNewList(list);
    } else {
      setNewList(listone);
    }
  }, [productList, categoryid]);

  useEffect(() => {
    setStart(0);
    if (newList.length >= howManyItemsToShow) {
      setEnd(howManyItemsToShow);
    } else {
      setEnd(newList.length);
    }
  }, [howManyItemsToShow, newList]);

  const handleClickedPrev = () => {
    if (start - howManyItemsToShow < 0) {
      setStart(0);
      setEnd(howManyItemsToShow);
    } else {
      setStart(start - howManyItemsToShow);
      setEnd(end - howManyItemsToShow);
    }
  };

  const hnadleClickedNext = () => {
    if (end + howManyItemsToShow >= newList.length) {
      setEnd(newList.length);
      setStart(newList.length - howManyItemsToShow);
    } else {
      setStart(start + howManyItemsToShow);
      setEnd(end + howManyItemsToShow);
    }
  };

  const handleClickedCancel = (item) => {
    const list = [...newList];
    const listOne = list.filter((i) => i.product_id !== item.product_id);
    const listTwo = list.filter((i) => i.style_id !== item.style_id);
    if (item.fec_user_shop_cart_id) {
      DeleteUserShopList({
        dispatch,
        shopcartidlist: [item.fec_user_shop_cart_id],
        list: listTwo,
      });
    } else if (item.fec_user_fever_id) {
      DeletedUserFever({
        feverId: item.fec_user_fever_id,
        dispatch,
        feverList: listOne,
      });
    } else {
      setNewList(listTwo);
    }
  };

  const handleClickedAddToCart = (item) => {
    const listOne = [...userShopList];
    if (item.style_name) {
      const listTwo = listOne.map((i) => {
        if (i.style_id !== item.style_id) {
          return i;
        }
        const obj = { ...i };
        obj.is_in_cart = true;
        return obj;
      });
      dispatch(SetUserShopList(listTwo));
    } else {
      LoadShopItemInfo({
        dispatch,
        list: listOne,
        itemStyleId: item.style_id,
      });
    }
  };

  return (
    <>
      {productList.length === 0
        ? (
          <RowContainer
            width={countInfoWidth * 0.9 - 10}
          >
            no items yet
          </RowContainer>
        ) : (
          <RowContainer
            width={countInfoWidth * 0.9 - 10}
          >
            {start === 0
              ? null
              : (
                <FeverButton
                  type="button"
                  onClick={handleClickedPrev}
                >
                  {'<<'}
                </FeverButton>
              )}
            {newList.slice(start, end).map((i) => (
              <FeverItemContainer
                key={i.style_id || i.product_id}
              >
                {showCancelbutton ? (
                  <FeverItemDeletedButton
                    type="button"
                    onClick={() => handleClickedCancel(i)}
                  >
                    X
                  </FeverItemDeletedButton>
                ) : null}
                <InfoCardSmall
                  id={i.product_id}
                  url={i.photo}
                  name={i.product_name}
                  price={i.price}
                />
                {showAddtoShopCart ? (
                  <button
                    type="button"
                    onClick={() => handleClickedAddToCart(i)}
                  >
                    Add to ShopCart
                  </button>
                ) : null}

              </FeverItemContainer>
            ))}
            {end === newList.length
              ? null
              : (
                <FeverButton
                  type="button"
                  onClick={hnadleClickedNext}
                >
                  {'>>'}
                </FeverButton>
              )}
          </RowContainer>
        )}
    </>
  );
};

FeverItems.propTypes = {
  categoryid: PropTypes.number,
  productList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  showCancelbutton: PropTypes.bool,
  showAddtoShopCart: PropTypes.bool,
};

FeverItems.defaultProps = {
  productList: [],
  categoryid: 0,
  showCancelbutton: false,
  showAddtoShopCart: false,
};

export default FeverItems;
