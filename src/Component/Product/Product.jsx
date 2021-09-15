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

import ProductDetail from './ProductDetail/ProductDetail';
import ProductRelated from './ProductRelated/ProductRelated';

import {
  ContainerStyle,
} from './ProductStyle';

const Product = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.window.countInfoWidth);
  const {
    productId,
    productIdList,
    productList,
  } = useSelector((state) => state.product);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const index = productIdList.indexOf(productId);
    if (index >= 0) {
      const id = productIdList[index];
      const data = productList[index];
      const style = null || data.styles[0];
      const photo = null || style.photos[0];
      dispatch(SetProduct(data));
      dispatch(SetProductMainStyle(style));
      dispatch(SetProductMainImage(photo));
      setLoading(true);
      const newProductIdList = [...productIdList];
      newProductIdList.splice(index, 1);
      newProductIdList.push(id);
      dispatch(SetProductIdList(newProductIdList));
      const newProductList = [...productList];
      newProductList.splice(index, 1);
      newProductList.push(data);
      dispatch(SetProductList(newProductList));
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
          <ContainerStyle
            width={width}
          >
            <ProductDetail />
            <ProductRelated />
          </ContainerStyle>
        )
        : <div>loading</div>}
    </>
  );
};

export default Product;
