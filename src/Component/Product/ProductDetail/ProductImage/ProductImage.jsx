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

  const sizeNum = 260 * (1 + zoomCount * 0.25);
  const photosList = productMainStyle.photos;
  const stylePhotoIdList = photosList.map((i) => i.photoid);

  useEffect(() => {
    setZoomCount(0);
  }, [productMainImageURL.url]);

  const handleClickedZoomIn = () => {
    setZoomCount(zoomCount + 1);
  };

  const handleClickedZoomOut = () => {
    setZoomCount(zoomCount - 1);
  };

  const handleClickedPrev = () => {
    const index = stylePhotoIdList.indexOf(productMainImageURL.photoid);
    if (index === photosList.length - 1) {
      dispatch(SetProductMainImage(photosList[0]));
    } else {
      dispatch(SetProductMainImage(photosList[index + 1]));
    }
  };

  const handleClickedNext = () => {
    const index = stylePhotoIdList.indexOf(productMainImageURL.photoid);
    if (index === 0) {
      dispatch(SetProductMainImage(photosList[photosList.length - 1]));
    } else {
      dispatch(SetProductMainImage(photosList[index - 1]));
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
          src={urlCreated({
            photo: productMainImageURL,
            comsList,
          })}
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
