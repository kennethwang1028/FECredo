import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import imgSize from '../../../Function/imgSize';
import { ProductMainImageSelected } from '../../../../Redux';

import ProductSmallImages from './ProductSmallImage/ProductSmallImage';

import {
  ProductImageContainer,
  ProductMainImageContainer,
  ProductImageButton,
  ProductSmallImageContainer,
} from '../../ProductStyle';

const ProductImage = () => {
  const imageList = useSelector((state) => state.product.product.photos);
  const productMainImage = useSelector((state) => state.product.productMainImage);
  const mainImage = imageList.filter((i) => i.photoId === productMainImage);
  const photoIdList = imageList.map((i) => i.photoId);
  const { url } = mainImage[0];
  const [zoomCount, setZoomCount] = useState(0);
  const sizeNum = 260 * (1 + zoomCount * 0.25);
  const dispatch = useDispatch();

  const handleClickedZoomIn = () => {
    setZoomCount(zoomCount + 1);
  };

  const handleClickedZoomOut = () => {
    setZoomCount(zoomCount - 1);
  };

  const handleClickedPrev = () => {
    const index = photoIdList.indexOf(productMainImage);
    if (index === photoIdList.length - 1) {
      dispatch(ProductMainImageSelected(photoIdList[0]));
    } else {
      dispatch(ProductMainImageSelected(photoIdList[index + 1]));
    }
  };

  const handleClickedNext = () => {
    const index = photoIdList.indexOf(productMainImage);
    if (index === 0) {
      dispatch(ProductMainImageSelected(photoIdList[photoIdList.length - 1]));
    } else {
      dispatch(ProductMainImageSelected(photoIdList[index - 1]));
    }
  };

  return (
    <ProductImageContainer>
      <ProductImageButton
        onClick={handleClickedNext}
      >
        {'<<'}
      </ProductImageButton>
      <ProductSmallImages />
      <ProductMainImageContainer>
        <img
          src={imgSize(url, sizeNum)}
          alt=""
        />
      </ProductMainImageContainer>
      <ProductSmallImageContainer>
        <div>Zoom in</div>
        <ProductImageButton
          onClick={handleClickedZoomIn}
        >
          +
        </ProductImageButton>
        <div>{`${100 + zoomCount * 25} %`}</div>
        <div>Zoom out</div>
        <ProductImageButton
          onClick={handleClickedZoomOut}
        >
          -
        </ProductImageButton>
      </ProductSmallImageContainer>
      <ProductImageButton
        onClick={handleClickedPrev}
      >
        {'>>'}
      </ProductImageButton>
    </ProductImageContainer>
  );
};

export default ProductImage;
