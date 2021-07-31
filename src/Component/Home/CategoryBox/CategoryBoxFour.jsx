import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import imgSize from '../../Function/imgSize';

import {
  CategoryBoxFourContainer,
  CategoryBoxFourName,
  CategoryBoxFourImgContainer,
  CategoryBoxFourCategory,
  CategoryBoxFourImg,
} from '../HomeStyle';

const CategoryBoxFour = (props) => {
  const {
    categoryId,
    listPromotion,
    category,
  } = props;
  const history = useHistory();

  const handleClickedProduct = (id) => {
    history.push(`/product/${id}`);
  };

  const handleClickedCategory = () => {
    history.push(`/search/${categoryId}`);
  };

  return (
    <CategoryBoxFourContainer>
      <CategoryBoxFourImgContainer>
        {listPromotion.slice(0, 2).map((i) => (
          <div key={i.productId}>
            <CategoryBoxFourImg
              src={imgSize(i.photo, 100)}
              onClick={() => handleClickedProduct(i.productId)}
            />
            <CategoryBoxFourName
              onClick={() => handleClickedProduct(i.productId)}
            >
              {i.name}
            </CategoryBoxFourName>
          </div>
        ))}
      </CategoryBoxFourImgContainer>
      <CategoryBoxFourImgContainer>
        {listPromotion.slice(2, 4).map((i) => (
          <div key={i.productId}>
            <CategoryBoxFourImg
              src={imgSize(i.photo, 100)}
              onClick={() => handleClickedProduct(i.productId)}
            />
            <CategoryBoxFourName
              onClick={() => handleClickedProduct(i.productId)}
            >
              {i.name}
            </CategoryBoxFourName>
          </div>
        ))}
      </CategoryBoxFourImgContainer>
      <CategoryBoxFourCategory
        type="button"
        data-testid="CBbt"
        onClick={handleClickedCategory}
      >
        {category}
      </CategoryBoxFourCategory>
    </CategoryBoxFourContainer>
  );
};

CategoryBoxFour.propTypes = {
  listPromotion: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number,
      name: PropTypes.string,
      photo: PropTypes.string,
    }),
  ),
  category: PropTypes.string,
  categoryId: PropTypes.number,
};

CategoryBoxFour.defaultProps = {
  listPromotion: [{
    productId: 0,
    name: '',
    photo: '',
  }],
  category: '',
  categoryId: 0,
};
export default CategoryBoxFour;
