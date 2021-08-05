import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import imgSize from '../../../../Function/imgSize';
import { ProductMainImageSelected } from '../../../../../Redux';

import {
  ProductSmallImageContainer,
  ProductSmallImageButton,
} from '../../../ProductStyle';

const ProductSmallImages = () => {
  const imageList = useSelector((state) => state.product.product.photos);
  const ProductMainImage = useSelector((state) => state.product.productMainImage);
  const dispatch = useDispatch();

  const handleClicked = (id) => {
    dispatch(ProductMainImageSelected(id));
  };

  return (
    <ProductSmallImageContainer>
      {imageList.map((i) => (
        <ProductSmallImageButton
          key={i.photoId}
          src={imgSize(i.url, 50)}
          width="50"
          height="50"
          isSeleced={i.photoId === ProductMainImage}
          onClick={() => handleClicked(i.photoId)}
        />
      ))}
    </ProductSmallImageContainer>
  );
};

export default ProductSmallImages;
