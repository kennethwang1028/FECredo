import React from 'react';
import { useSelector } from 'react-redux';

import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';

import {
  ProductDetailContainer,
} from '../ProductStyle';

const ProductDetail = () => {
  const width = useSelector((state) => state.window.windowWidth);

  return (
    <ProductDetailContainer isRow={width > 700}>
      <ProductImage isRow={width > 700} />
      <ProductInfo isRow={width > 700} />
    </ProductDetailContainer>
  );
};

export default ProductDetail;
