import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import imgSize from '../../../../Function/imgSize';
import { SetProductMainImage } from '../../../../../Redux';

import {
  ProductSmallImageContainer,
  ProductSmallImageButton,
} from '../../../ProductStyle';

const ProductSmallImages = () => {
  let imageList = useSelector((state) => state.product.productMainStyle.photos) || [];
  if (imageList.length > 7) {
    imageList = imageList.slice(0, 6);
  }
  const productMainImageURL = useSelector((state) => state.product.productMainImageURL);
  const dispatch = useDispatch();

  const handleClicked = (url) => {
    dispatch(SetProductMainImage(url));
  };

  return (
    <ProductSmallImageContainer>
      {imageList.map((i) => (
        <ProductSmallImageButton
          key={i.photoId}
          src={imgSize(i.url, 50)}
          width="50"
          height="50"
          isSeleced={i.url === productMainImageURL}
          onClick={() => handleClicked(i.url)}
        />
      ))}
    </ProductSmallImageContainer>
  );
};

export default ProductSmallImages;
