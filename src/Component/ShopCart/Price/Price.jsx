import React from 'react';
import PropTypes from 'prop-types';

import {
  ColumnContianerStyle,
  ColumnContianerLeftStyle,
  ColumnContianerRightStyle,
  ShopItemStyle,
} from '../ShopCartStyles';

const Price = ({ info }) => {
  const {
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
  } = info;

  const discountRender = () => {
    if (discountRate === -168) {
      return <div>This Code is not vailed</div>;
    }
    if (discountRate === 0) {
      return <div>^.^!</div>;
    }
    return <div>{`You get ${discountRate}% off`}</div>;
  };

  return (
    <ShopItemStyle>
      <ColumnContianerStyle>
        {isLoadUserInfo
          ? (
            <>
              Discount Code :
              <input
                type="text"
                onChange={handleChangeDiscountCode}
                value={code}
              />
              {discountRender()}
              <button
                type="button"
                onClick={handleClickApplyDiscount}
              >
                {discountRate === 0 ? 'Apply' : 'try other code'}
              </button>
            </>
          )
          : null}
      </ColumnContianerStyle>
      <ColumnContianerStyle>
        <div>Total Save</div>
        <div>{`$${(discount + saveBeforeDiscount).toFixed(2)}`}</div>
        Shipping
        <select
          value={shipping}
          onChange={handleChangeShipping}
        >
          <option
            value={10}
          >
            2 days
          </option>
          <option
            value={5}
          >
            3 - 5 days
          </option>
          <option
            value={0}
          >
            7 days
          </option>
        </select>
      </ColumnContianerStyle>
      <ColumnContianerLeftStyle>
        <div>Price:</div>
        <div>Tax:</div>
        <div>Shipping:</div>
        <div>Total:</div>
      </ColumnContianerLeftStyle>
      <ColumnContianerRightStyle>
        <div>{`$${(price - (saveBeforeDiscount + discount)).toFixed(2)}`}</div>
        <div>{`$${tax.toFixed(2)}`}</div>
        <div>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</div>
        <div>{`$${((price + shipping + tax) - (saveBeforeDiscount + discount)).toFixed(2)}`}</div>
      </ColumnContianerRightStyle>
    </ShopItemStyle>
  );
};

Price.propTypes = {
  info: PropTypes.shape({
    isLoadUserInfo: PropTypes.bool,
    discountRate: PropTypes.number,
    code: PropTypes.string,
    discount: PropTypes.number,
    shipping: PropTypes.number,
    price: PropTypes.number,
    tax: PropTypes.number,
    saveBeforeDiscount: PropTypes.number,
    handleClickApplyDiscount: PropTypes.func,
    handleChangeDiscountCode: PropTypes.func,
    handleChangeShipping: PropTypes.func,
  }),
};

Price.defaultProps = {
  info: {
    isLoadUserInfo: false,
    discountRate: 0,
    code: '',
    discount: 0,
    shipping: 0,
    price: 0,
    tax: 0,
    saveBeforeDiscount: 0,
    handleClickApplyDiscount: () => {},
    handleChangeDiscountCode: () => {},
    handleChangeShipping: () => {},
  },
};

export default Price;
