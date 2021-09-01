import React from 'react';
import { useSelector } from 'react-redux';

import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';

import {
  ProductDetailContainerStyle,
} from '../ProductStyle';

const ProductDetail = () => {
  const width = useSelector((state) => state.window.countInfoWidth);

  return (
    <ProductDetailContainerStyle isRow={width > 700}>
      <ProductImage />
      <ProductInfo />
    </ProductDetailContainerStyle>
  );
};

export default ProductDetail;
