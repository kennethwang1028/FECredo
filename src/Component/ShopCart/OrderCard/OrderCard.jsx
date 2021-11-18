import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  LoadOrderDetail,
} from '../../../Redux';

import {
  RowContainer,
  FeverButton,
  ColumnButtonStyle,
  OrderTextStyle,
  PopOutContianerStyle,
  DeleteButtonStyle,
  CheckOutButtonStyle,
} from '../ShopCartStyles';

const OrderContainer = (props) => {
  const {
    orderList,
  } = props;

  const dispatch = useDispatch();

  const {
    countInfoWidth,
  } = useSelector((state) => state.window);

  const {
    userBillShippingInfoList,
  } = useSelector((state) => state.shopCart);

  const [howManyItemsToShow, setHowManyItemsToShow] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [newList, setNewList] = useState([]);
  const [isDetailPopOut, setIsDetailPopOut] = useState(false);
  const [itemDetail, setItemDetial] = useState({});

  useEffect(() => {
    if (countInfoWidth <= 500) {
      setHowManyItemsToShow(Math.floor(400 / 200));
    } else {
      setHowManyItemsToShow(Math.floor((countInfoWidth - 100) / 200));
    }
  }, [countInfoWidth]);

  useEffect(() => {
    const list = [...orderList].reverse();
    setNewList(list);
  }, [orderList]);

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

  const handleClickedCancel = () => {
    setIsDetailPopOut(false);
  };

  const totalFunc = (i) => (
    (Number(i.price) + Number(i.shipping) + Number(i.tax) - Number(i.discount)).toFixed(2)
  );

  const OrderDetailFunc = (i) => {
    if (!i.orderDetail) {
      LoadOrderDetail({
        dispatch,
        orderid: i.order_id,
        list: orderList,
        func: setItemDetial,
        booleanFunc: setIsDetailPopOut,
      });
    } else {
      setItemDetial(i);
      setIsDetailPopOut(true);
    }
  };

  const addressFunc = (id) => {
    const address = userBillShippingInfoList.filter((i) => (
      i.fec_user_bill_shipping_info_id === id));
    const info = address[0];
    return (
      <>
        {`Name : ${info.fec_user_first_name} ${info.fec_user_last_name}`}
        <br />
        {`Phone : ${info.fec_user_phone}`}
        <br />
        {`Email : ${info.fec_user_email}`}
        <br />
        {`Address : ${info.fec_user_city}, ${info.fec_user_zip_code}`}
      </>
    );
  };

  const itemsFunc = (list) => {
    const shippingIdList = [];
    const shippingObj = {};
    for (let i = 0; i < list.length; i += 1) {
      const obj = { ...list[i] };
      if (!shippingObj[obj.shipping_address]) {
        shippingObj[obj.shipping_address] = [obj];
        shippingIdList.push(obj.shipping_address);
      } else {
        shippingObj[obj.shipping_address].push(obj);
      }
    }
    return (
      <>
        {shippingIdList.map((i, index) => (
          <OrderTextStyle
            key={i}
          >
            {`${index + 1}. Shipping Address : `}
            <br />
            {addressFunc(i)}
            {shippingObj[i].map((j, jindex) => (
              <OrderTextStyle
                key={j.fec_user_shop_cart_id}
              >
                {`${jindex + 1}.  `}
                <img
                  alt="orderpic"
                  src={j.photo}
                  width="16"
                  height="16"
                />
                {'  '}
                <>
                  {`${j.product_name} x ${j.quantity}`}
                </>
              </OrderTextStyle>
            ))}
          </OrderTextStyle>
        ))}
      </>
    );
  };

  return (
    <>
      {isDetailPopOut
        ? (
          <PopOutContianerStyle>
            <DeleteButtonStyle
              type="button"
              onClick={handleClickedCancel}
            />
            <OrderTextStyle>
              {`Order # : ${itemDetail.order_id}`}
              <br />
              {`Price : $${itemDetail.price}`}
              <br />
              {`Shipping Fee : $${itemDetail.shipping}`}
              <br />
              {`Tax : $${itemDetail.tax}`}
              <br />
              {`Discount Code: ${itemDetail.code}`}
              <br />
              {`Discount Save: $${itemDetail.discount}`}
              <br />
              {`Total: $${totalFunc(itemDetail)}`}
            </OrderTextStyle>
            <OrderTextStyle>
              Billing Address :
              <br />
              {addressFunc(itemDetail.bill_address)}
            </OrderTextStyle>
            <OrderTextStyle>
              {itemsFunc(itemDetail.orderDetail)}
            </OrderTextStyle>
            <CheckOutButtonStyle
              type="button"
              onClick={handleClickedCancel}
            >
              Okay
            </CheckOutButtonStyle>
          </PopOutContianerStyle>
        )
        : null}
      {orderList.length === 0
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
              <ColumnButtonStyle
                key={i.order_id}
                onClick={() => { OrderDetailFunc(i); }}
              >
                <OrderTextStyle>
                  Order # :
                  {' '}
                  {i.order_id}
                  <br />
                  Total :
                  {' $'}
                  {totalFunc(i)}
                  <br />
                  Order date :
                  <br />
                  {i.shop_date.slice(0, 16)}
                </OrderTextStyle>
              </ColumnButtonStyle>
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

OrderContainer.propTypes = {
  orderList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

OrderContainer.defaultProps = {
  orderList: [{}],
};

export default OrderContainer;
