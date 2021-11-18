import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  SetProductId,
  SetUserShopList,
  SetuserShopCloneList,
} from '../../../Redux';

import {
  ShopItemStyle,
  ShopItemImgStyle,
  ColumnContianerStyle,
} from '../ShopCartStyles';

const ShopCartItem = ({ item, isClone = false }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    userShopCloneList,
    userShopList,
  } = useSelector((state) => state.shopCart);

  const skusList = item.skus_option || [];
  const newSkus = skusList.filter((i) => i.skusid === item.skus_id);

  const [skus, setSkus] = useState(newSkus[0]);
  const [qty, setQty] = useState(item.quantity);
  const [maxQty, setMaxQty] = useState(newSkus[0].quantity);
  const [isAdding, setIsAdding] = useState(true);

  useEffect(() => {
    const cloneIdList = userShopCloneList.map((i) => i.clone_id);
    let id;
    if (isClone) {
      const obj = { ...item };
      const idList = obj.clone_id.split('clone');
      id = `${idList[0]}clone${idList[1] + 1}`;
    } else {
      const obj = { ...item };
      id = `${obj.style_id}clone${1}`;
    }
    if (cloneIdList.includes(id)) {
      setIsAdding(false);
    } else {
      setIsAdding(true);
    }
  }, [userShopCloneList]);

  const handleClickedToItem = () => {
    dispatch(SetProductId(item.product_id));
    history.push('/product');
  };

  const handleChangeSize = (event) => {
    const newObj = skusList.filter((i) => i.size === event.target.value);
    setSkus(newObj[0]);
    setQty(1);
    setMaxQty(newObj[0].quantity);
    if (isClone) {
      const list = [...userShopCloneList];
      const newList = list.map((i) => {
        if (item.clone_id === i.clone_id) {
          const obj = { ...item };
          obj.skus_id = newObj[0].skusid;
          obj.quantity = 1;
          return obj;
        }
        return i;
      });
      dispatch(SetuserShopCloneList(newList));
    } else {
      const list = [...userShopList];
      const newList = list.map((i) => {
        if (item.style_id === i.style_id) {
          const obj = { ...item };
          obj.skus_id = newObj[0].skusid;
          obj.quantity = 1;
          return obj;
        }
        return i;
      });
      dispatch(SetUserShopList(newList));
    }
  };

  const handleChangeQTY = (event) => {
    setQty(Number(event.target.value));
    if (isClone) {
      const list = [...userShopCloneList];
      const newList = list.map((i) => {
        if (item.clone_id === i.clone_id) {
          const obj = { ...item };
          obj.quantity = Number(event.target.value);
          return obj;
        }
        return i;
      });
      dispatch(SetuserShopCloneList(newList));
    } else {
      const list = [...userShopList];
      const newList = list.map((i) => {
        if (item.style_id === i.style_id) {
          const obj = { ...item };
          obj.quantity = Number(event.target.value);
          return obj;
        }
        return i;
      });
      dispatch(SetUserShopList(newList));
    }
  };

  const handleClickedMove = () => {
    if (isClone) {
      const list = [...userShopCloneList];
      const newList = list.filter((i) => (
        item.clone_id !== i.clone_id
      ));
      dispatch(SetuserShopCloneList(newList));
    } else {
      const list = [...userShopList];
      const newList = list.map((i) => {
        if (item.style_id === i.style_id) {
          const obj = { ...item };
          obj.is_in_cart = false;
          return obj;
        }
        return i;
      });
      dispatch(SetUserShopList(newList));
    }
  };

  const handleClickedAddDifferentSize = () => {
    const list = [...userShopCloneList];
    if (isClone) {
      const obj = { ...item };
      const idList = obj.clone_id.split('clone');
      obj.clone_id = `${idList[0]}clone${idList[1] + 1}`;
      list.push(obj);
    } else {
      const obj = { ...item };
      obj.clone_id = `${obj.style_id}clone${1}`;
      list.push(obj);
    }
    dispatch(SetuserShopCloneList(list));
  };

  return (
    <ShopItemStyle>
      <ColumnContianerStyle>
        <ShopItemImgStyle
          type="button"
          onClick={handleClickedToItem}
        >
          <img
            src={item.photo}
            alt="shopitem"
            height="85"
            width="atuo"
          />
        </ShopItemImgStyle>
      </ColumnContianerStyle>
      <ColumnContianerStyle>
        <span>
          {item.product_name}
        </span>
        <span>
          {`---${item.style_name}---`}
        </span>
        {item.on_sale === 0
          ? (
            <span>
              {`USD $${item.price}`}
            </span>
          )
          : (
            <span>
              {`USD $${item.on_sale}`}
            </span>
          )}
      </ColumnContianerStyle>
      <ColumnContianerStyle>
        <span>
          Size:
        </span>
        <select
          onChange={handleChangeSize}
          value={skus.size}
        >
          {skusList.map((i) => (
            <option
              key={i.skusid}
            >
              {i.size}
            </option>
          ))}
        </select>
        <span>
          Qty:
        </span>
        <select
          value={qty}
          onChange={handleChangeQTY}
        >
          {[...new Array(maxQty)].map((i, index) => (
            <option
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              value={index + 1}
            >
              {index + 1}
            </option>
          ))}
        </select>
      </ColumnContianerStyle>
      <ColumnContianerStyle>
        <button
          type="button"
          onClick={handleClickedMove}
        >
          X
        </button>
        {skusList.length > 1 && isAdding
          ? (
            <button
              type="button"
              onClick={handleClickedAddDifferentSize}
            >
              add different size
            </button>
          )
          : <br />}
        {item.on_sale === 0
          ? (
            <span>
              {`USD $${item.price * qty}.00`}
            </span>
          )
          : (
            <span>
              {`SAVE $${(item.price - item.on_sale) * qty}.00`}
              <br />
              {`USD $${item.on_sale * qty}.00`}
            </span>
          )}
      </ColumnContianerStyle>
    </ShopItemStyle>
  );
};

ShopCartItem.propTypes = {
  item: PropTypes.shape({
    fec_user_id: PropTypes.number,
    fec_user_shop_cart_id: PropTypes.number,
    is_in_cart: PropTypes.bool,
    order_id: PropTypes.number,
    photo: PropTypes.string,
    price: PropTypes.number,
    on_sale: PropTypes.number,
    product_id: PropTypes.number,
    style_name: PropTypes.string,
    product_name: PropTypes.string,
    quantity: PropTypes.number,
    skus_id: PropTypes.number,
    style_id: PropTypes.number,
    clone_id: PropTypes.string,
    skus_option: PropTypes.arrayOf(
      PropTypes.shape({
        skusid: PropTypes.number,
        size: PropTypes.string,
        quantity: PropTypes.number,
      }),
    ),
  }),
  isClone: PropTypes.bool,
};

ShopCartItem.defaultProps = {
  item: {
    clone_id: null,
    fec_user_id: 0,
    fec_user_shop_cart_id: null,
    is_in_cart: null,
    order_id: null,
    photo: '',
    style_name: '',
    price: 0,
    on_sale: 0,
    product_id: 0,
    product_name: '',
    quantity: 0,
    skus_id: 0,
    style_id: 0,
    skus_option: [],
  },
  isClone: false,
};

export default ShopCartItem;
