import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ProductMainStyleSelected,
  ProductMainImageSelected,
} from '../../../../../Redux';

import {
  ProductStylesContainer,
  ProductStylesButton,
  Row,
} from '../../../ProductStyle';

const ProductStyles = () => {
  const dispatch = useDispatch();

  const stylesList = useSelector((state) => (state.product.product.styles)) || [];

  const handleClicked = (event) => {
    const index = event.target.id;
    let url;
    if (stylesList[index].photos) {
      url = stylesList[index].photos[0].url;
    } else {
      url = './icon/no.jpeg';
    }
    dispatch(ProductMainStyleSelected(stylesList[index]));
    dispatch(ProductMainImageSelected(url));
  };

  return (
    <ProductStylesContainer>
      <Row>
        {stylesList.slice(0, 3).map((i, index) => (
          <ProductStylesButton
            key={i.styleId}
            id={index}
            src={i.photos ? i.photos[0].url : './icon/no.jpeg'}
            width="50"
            heigth="50"
            onClick={handleClicked}
          />
        ))}
      </Row>
      <Row>
        {stylesList.slice(3, 6).map((i, index) => (
          <ProductStylesButton
            key={i.styleId}
            id={index + 3}
            src={i.photos ? i.photos[0].url : './icon/no.jpeg'}
            width="50"
            heigth="50"
            onClick={handleClicked}
          />
        ))}
      </Row>
    </ProductStylesContainer>
  );
};

export default ProductStyles;
