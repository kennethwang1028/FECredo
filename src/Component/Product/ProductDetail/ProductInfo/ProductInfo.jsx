import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductStylesImages from './ProductStylesImages/ProductStylesImages';

import {
  PostUserFever,
  DeletedUserFever,
  SetUserShopCartList,
  SetUserShopList,
  PostUserShoplist,
  DeleteUserShopList,
  UpdateUserShopList,
} from '../../../../Redux';

import {
  ContainerStyle,
  RowStyle,
  ProductTextStyle,
  StylesButtonStyle,
  ColumnEnd,
  Column,
  Select,
  AddFeverButton,
} from '../../ProductStyle';

const ProductInfo = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.window.countInfoWidth);

  const { userShopList } = useSelector((state) => state.shopCart);

  const {
    userFeverList,
    isLoadUserInfo,
    userInfo,
  } = useSelector((state) => state.user);

  const {
    categoriesList,
  } = useSelector((state) => state.basicInfo);

  const {
    product,
    productMainStyle,
    productId,
    productMainImageURL,
  } = useSelector((state) => state.product);

  const category = categoriesList.filter(
    (i) => i.categoryid === product.category.categoryid,
  );

  const {
    onsale,
    price,
    skus,
    stylename,
    styleid,
  } = productMainStyle;

  const [sizeId, setSizeId] = useState(skus[0].skusid);
  const [maxQty, setMaxQty] = useState(skus[0].quantity);
  const [qty, setQty] = useState(1);
  const [isUserLogIn, setIsUserLogIn] = useState(false);
  const [isItUserFever, setIsItUserFever] = useState(false);
  const [feverId, setFeverId] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (isLoadUserInfo) {
      setIsUserLogIn(true);
      const feverIdList = userFeverList.map((i) => i.product_id);
      const index = feverIdList.indexOf(productId);
      if (index > -1) {
        setIsItUserFever(true);
        const id = userFeverList[index].fec_user_fever_id;
        setFeverId(id);
      } else {
        setIsItUserFever(false);
      }
    } else {
      setIsUserLogIn(false);
    }
  }, [productId]);

  useEffect(() => {
    setSizeId(skus[0].skusid);
    setMaxQty(skus[0].quantity);
  }, [productMainStyle]);

  useEffect(() => {
    const shopIdList = userShopList.map((i) => Number(i.style_id));
    const index = shopIdList.indexOf(Number(styleid));
    if (index < 0) {
      setIsInCart(false);
    } else if (userShopList[index].is_in_cart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [styleid, userShopList]);

  const handleChangeSize = (event) => {
    const skusObj = skus.filter((i) => i.size === event.target.value);
    setSizeId(skusObj[0].skusid);
    setMaxQty(skusObj[0].quantity);
    setQty(1);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  const handleClickedAddFever = () => {
    if (!isUserLogIn) {
      alert('Hello! Please Log in first!!');
    } else {
      if (isItUserFever) {
        DeletedUserFever({
          dispatch,
          feverId,
          feverList: userFeverList,
        });
      } else {
        const feverInfo = {
          fec_user_id: userInfo.id,
          product_id: productId,
          product_name: product.productname,
          price,
          category_id: product.category.categoryid,
          photo: productMainImageURL,
        };
        PostUserFever({
          feverInfo,
          dispatch,
          feverList: userFeverList,
        });
      }
      setIsItUserFever(!isItUserFever);
    }
  };

  const handleClickedAddCart = () => {
    const newObj = {
      product_id: productId,
      product_name: product.productname,
      style_id: productMainStyle.styleid,
      style_name: stylename,
      on_sale: onsale,
      price,
      skus_id: sizeId,
      skus_option: skus,
      quantity: Number(qty),
      photo: productMainImageURL,
      order_id: null,
      shipping_address: null,
      is_in_cart: true,
    };

    const shopIdList = userShopList.map((i) => Number(i.style_id));
    const index = shopIdList.indexOf(Number(styleid));
    const list = [...userShopList];
    if (index > -1) {
      list[index].is_in_cart = !isInCart;
      dispatch(SetUserShopList(list));
    } else if (!isLoadUserInfo) {
      list.unshift(newObj);
      dispatch(SetUserShopList(list));
    } else {
      PostUserShoplist({
        dispatch,
        shopCartListInfo: {
          userId: userInfo.id,
          shopList: [newObj],
        },
        list,
      });
    }
  };

  return (
    <ContainerStyle width={width > 700 ? width * 0.4 : width}>
      <RowStyle>
        <ProductTextStyle
          fontSize="20"
        >
          {product.productname}
        </ProductTextStyle>
        <ProductTextStyle
          fontSize="18"
        >
          {category[0].categoryname}
        </ProductTextStyle>
        <AddFeverButton
          type="button"
          isFever={isItUserFever}
          onClick={handleClickedAddFever}
        />
      </RowStyle>
      <RowStyle>
        <Column>
          <ProductTextStyle
            fontSize="18"
          >
            {stylename}
          </ProductTextStyle>
          <ProductTextStyle
            fontSize="16"
          >
            {product.slogan}
          </ProductTextStyle>
          {onsale !== 0
            ? (
              <ProductTextStyle
                fontSize="16"
                color="red"
              >
                {`onSale-Price: $ ${onsale}.00`}
              </ProductTextStyle>
            )
            : (
              <ProductTextStyle
                fontSize="16"
                color="black"
              >
                ji
              </ProductTextStyle>
            )}
          <ProductTextStyle
            fontSize="16"
          >
            {`Price: $ ${price}.00`}
          </ProductTextStyle>
        </Column>
        {skus[0].skusid === 0
          ? (
            <ProductTextStyle
              fontSize="16"
            >
              No Available
            </ProductTextStyle>
          )
          : (
            <Column>
              <RowStyle>
                <ProductTextStyle
                  fontSize="16"
                >
                  Size:
                </ProductTextStyle>
                <Select
                  isRow={width > 700}
                  onChange={handleChangeSize}
                >
                  {skus.map((i) => (
                    <option
                      key={i.skusid}
                    >
                      {i.size}
                    </option>
                  ))}
                </Select>
              </RowStyle>
              <RowStyle>
                {maxQty <= 5 && maxQty !== 0 ? (
                  <ProductTextStyle
                    color="red"
                  >
                    {`last ${maxQty}`}
                  </ProductTextStyle>
                ) : null}
              </RowStyle>
              <RowStyle>
                <ProductTextStyle>
                  Qty:
                </ProductTextStyle>
                {maxQty === 0
                  ? (
                    <ProductTextStyle
                      color="red"
                    >
                      Out of Stock
                    </ProductTextStyle>
                  )
                  : (
                    <Select
                      isRow={width > 700}
                      onChange={handleChangeQty}
                    >
                      {[...Array(maxQty)].map((i, index) => (
                        <option
                          key={index}
                        >
                          {index + 1}
                        </option>
                      ))}
                    </Select>
                  )}
              </RowStyle>
            </Column>
          )}
      </RowStyle>
      <RowStyle>
        <ProductTextStyle>
          {product.description}
        </ProductTextStyle>
      </RowStyle>
      <RowStyle>
        {product.featurevalue.map((i) => (
          <ProductTextStyle
            key={i}
          >
            {i}
          </ProductTextStyle>
        ))}
      </RowStyle>
      <RowStyle>
        <ProductStylesImages />
        <ColumnEnd>
          <ProductTextStyle
            color="yellow"
          >
            {`Total : $${qty * onsale || qty * price}.00`}
          </ProductTextStyle>
          <StylesButtonStyle
            width="50"
            heigth="50"
            onClick={handleClickedAddCart}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </StylesButtonStyle>
        </ColumnEnd>
      </RowStyle>
    </ContainerStyle>
  );
};

export default ProductInfo;
