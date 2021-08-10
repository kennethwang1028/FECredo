import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  ProductEnter,
  ProductMainImageSelected,
  ProductMainStyleSelected,
} from '../../Redux';

import ProductDetail from './ProductDetail/ProductDetail';
import ProductRelated from './ProductRelated/ProductRelated';

import {
  Container,
} from './ProductStyle';

const Product = () => {
  const width = useSelector((state) => state.window.windowWidth);
  const productId = useSelector((state) => state.product.productId);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios(`http://localhost:3001/products/${productId}`)
      .then((res) => {
        const { data } = res;
        const mainStyle = data.styles[0] || [];
        const ImageList = mainStyle.photos || [{ photoId: 0, url: './icon/no.jpeg' }];
        const mainImage = ImageList[0];

        dispatch(ProductEnter(data));
        dispatch(ProductMainStyleSelected(mainStyle));
        dispatch(ProductMainImageSelected(mainImage.url));

        setLoading(true);
      });
  }, [productId]);

  return (
    <>
      {loading
        ? (
          <Container
            width={width}
          >
            <ProductDetail />
            <ProductRelated />
          </Container>
        )
        : <div>loading</div>}
    </>
  );
};

export default Product;
