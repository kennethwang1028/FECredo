import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import urlCreated from '../../../../Function/urlCreated';
import { SetProductMainImage } from '../../../../../Redux';

import {
  ProductSmallImageContainer,
  ProductSmallImageButtonStyle,
} from '../../../ProductStyle';

const ProductSmallImages = () => {
  const dispatch = useDispatch();
  const {
    productMainImageURL,
    productMainStyle,
  } = useSelector((state) => state.product);
  const { comsList } = useSelector((state) => state.basicInfo);

  let imageList = productMainStyle.photos || [];
  if (imageList.length > 7) {
    imageList = imageList.slice(0, 6);
  }

  const handleClicked = (photo) => {
    dispatch(SetProductMainImage(photo));
  };

  return (
    <ProductSmallImageContainer>
      {imageList.map((i) => (
        <ProductSmallImageButtonStyle
          key={i.photoid}
          src={urlCreated({
            photo: i,
            comsList,
          })}
          width="50"
          height="50"
          isSeleced={i.url === productMainImageURL.url}
          onClick={() => handleClicked(i)}
        />
      ))}
    </ProductSmallImageContainer>
  );
};

export default ProductSmallImages;
