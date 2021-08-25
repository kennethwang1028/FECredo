import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import imgSize from '../../../Function/imgSize';
import { SetProductMainImage } from '../../../../Redux';

import ProductSmallImages from './ProductSmallImage/ProductSmallImage';

import {
  ProductImageContainer,
  ProductMainImageContainer,
  ProductImageButton,
  ProductSmallImageContainer,
} from '../../ProductStyle';

const ProductImage = () => {
  const width = useSelector((state) => state.window.windowWidth);
  const imageList = useSelector((state) => state.product.productMainStyle.photos) || [];
  const productMainImageURL = useSelector((state) => state.product.productMainImageURL);

  let photoURLList;

  if (imageList.length !== 1) {
    photoURLList = imageList.map((i) => i.url);
  }

  const [zoomCount, setZoomCount] = useState(0);
  const sizeNum = 260 * (1 + zoomCount * 0.25);
  const dispatch = useDispatch();

  useEffect(() => {
    setZoomCount(0);
  }, [productMainImageURL]);

  const handleClickedZoomIn = () => {
    setZoomCount(zoomCount + 1);
  };

  const handleClickedZoomOut = () => {
    setZoomCount(zoomCount - 1);
  };

  const handleClickedPrev = () => {
    const index = photoURLList.indexOf(productMainImageURL);
    if (index === photoURLList.length - 1) {
      dispatch(SetProductMainImage(photoURLList[0]));
    } else {
      dispatch(SetProductMainImage(photoURLList[index + 1]));
    }
  };

  const handleClickedNext = () => {
    const index = photoURLList.indexOf(productMainImageURL);
    if (index === 0) {
      dispatch(SetProductMainImage(photoURLList[photoURLList.length - 1]));
    } else {
      dispatch(SetProductMainImage(photoURLList[index - 1]));
    }
  };

  return (
    <ProductImageContainer isRow={width > 700}>
      <ProductImageButton
        onClick={handleClickedNext}
      >
        {'<<'}
      </ProductImageButton>
      <ProductSmallImages />
      <ProductMainImageContainer>
        <img
          src={imgSize(productMainImageURL, sizeNum)}
          width={sizeNum}
          height="auto"
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
