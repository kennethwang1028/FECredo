import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SetProductMainStyle,
  SetProductMainImage,
} from '../../../../../Redux';

import urlCreated from '../../../../Function/urlCreated';

import {
  ProductStylesContainer,
  StylesButtonStyle,
  RowStyle,
} from '../../../ProductStyle';

const ProductStylesImages = () => {
  const dispatch = useDispatch();

  const { styles } = useSelector((state) => (state.product.product)) || [];
  const { comsList } = useSelector((state) => (state.basicInfo));

  const handleClicked = (event) => {
    const { id } = event.target;
    const style = styles.filter((i) => i.styleid === Number(id));
    dispatch(SetProductMainStyle(style[0]));
    dispatch(SetProductMainImage(style[0].photos[0]));
  };

  return (
    <ProductStylesContainer>
      <RowStyle>
        {styles.slice(0, 3).map((i) => (
          <StylesButtonStyle
            key={i.styleid}
            id={i.styleid}
            src={urlCreated({
              photo: i.photos[0],
              comsList,
            })}
            width="50"
            heigth="50"
            onClick={handleClicked}
          />
        ))}
      </RowStyle>
      <RowStyle>
        {styles.slice(3, 6).map((i) => (
          <StylesButtonStyle
            key={i.styleid}
            id={i.styleid}
            src={urlCreated({
              photo: i.photos[0],
              comsList,
            })}
            width="50"
            heigth="50"
            onClick={handleClicked}
          />
        ))}
      </RowStyle>
    </ProductStylesContainer>
  );
};

export default ProductStylesImages;
