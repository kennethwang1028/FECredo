import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import urlCreated from '../../../Function/urlCreated';
import { SetProductMainImage } from '../../../../Redux';

import ProductSmallImages from './ProductSmallImage/ProductSmallImage';

import {
  ProductImageContainer,
  ProductMainImageContainer,
  ProductImageButton,
  ProductSmallImageContainer,
} from '../../ProductStyle';

const ProductImage = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.window.countInfoWidth);

  const {
    comsList,
  } = useSelector((state) => state.basicInfo);

  const {
    productMainImageURL,
    productMainStyle,
  } = useSelector((state) => state.product);

  const [zoomCount, setZoomCount] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photosList, setPhotosList] = useState(productMainStyle.photos);

  const sizeNum = 260 * (1 + zoomCount * 0.25);

  useEffect(() => {
    setPhotosList(productMainStyle.photos);
    setPhotoIndex(0);
  }, [productMainStyle]);

  useEffect(() => {
    setZoomCount(0);
    dispatch(SetProductMainImage(urlCreated({
      photo: photosList[photoIndex],
      comsList,
    })));
  }, [photoIndex]);

  const handleClickedZoomIn = () => {
    setZoomCount(zoomCount + 1);
  };

  const handleClickedZoomOut = () => {
    setZoomCount(zoomCount - 1);
  };

  const handleClickedPrev = () => {
    if (photoIndex === 0) {
      const index = photosList.length - 1;
      setPhotoIndex(index);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  const handleClickedNext = () => {
    const maxIndex = photosList.length - 1;
    if (photoIndex === maxIndex) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const indexChanged = (index) => {
    setPhotoIndex(index);
  };
  return (
    <ProductImageContainer isRow={width > 700}>
      <ProductImageButton
        onClick={handleClickedPrev}
      >
        {'<<'}
      </ProductImageButton>
      <ProductSmallImages
        photosList={photosList}
        photoIndex={photoIndex}
        indexChanged={indexChanged}
      />
      <ProductMainImageContainer>
        <img
          src={productMainImageURL}
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
        onClick={handleClickedNext}
      >
        {'>>'}
      </ProductImageButton>
    </ProductImageContainer>
  );
};

export default ProductImage;
