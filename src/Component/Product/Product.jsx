import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  ProductEnter,
  ProductMainImageSelected,
} from '../../Redux';

import ProductDetail from './ProductDetail/ProductDetail';
import { Container } from './ProductStyle';

import data from '../../../Data/product';

const Product = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductEnter(data[0]));
    dispatch(ProductMainImageSelected(data[0].photos[0].photoId));
    setLoading(true);
  }, []);
  return (
    <Container>
      {loading ? <ProductDetail /> : <div>loading</div>}
    </Container>
  );
};

export default Product;
