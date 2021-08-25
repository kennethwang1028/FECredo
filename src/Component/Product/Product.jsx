import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SetProduct,
  SetProductMainImage,
  SetProductMainStyle,
  FetchProduct,
  SetProductList,
  SetProductIdList,
} from '../../Redux';

import urlCreated from '../Function/urlCreated';

import ProductDetail from './ProductDetail/ProductDetail';
import ProductRelated from './ProductRelated/ProductRelated';

import {
  Container,
} from './ProductStyle';

const Product = () => {
  const width = useSelector((state) => state.window.windowWidth);
  const {
    productId,
    product,
    productIdList,
    productList,
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const index = productIdList.indexOf(productId);
    if (index >= 0) {
      const data = productIdList[index];
      const style = null || data.styles[0];
      const photo = null || style.photos[0];
      dispatch(SetProduct(data));
      dispatch(SetProductMainStyle(style));
      dispatch(SetProductMainImage(photo));
    } else {
      FetchProduct({
        dispatch,
        productId,
        productList,
        productIdList,
        func: setLoading,
      });
    }
  }, [productId]);

  return (
    <>
      {loading
        ? (
          <Container
            width={width}
          >
            {/* <ProductDetail /> */}
            {/* <ProductRelated /> */}
          </Container>
        )
        : <div>loading</div>}
    </>
  );
};

export default Product;
