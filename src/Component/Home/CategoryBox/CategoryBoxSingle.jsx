import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import imgSize from '../../Function/imgSize';

import {
  CategoryBoxContainer,
  CategoryTopContainer,
  CategoryMiddleContainer,
  CategoryBoxButton,
} from '../HomeStyle';

const CategoryBoxSingle = (props) => {
  const {
    name, photo, category, id,
  } = props;
  const history = useHistory();

  const handleClicked = () => {
    history.push('/product');
    console.log('id need to add to redux');
  };

  return (
    <CategoryBoxContainer>
      <CategoryTopContainer>
        {category}
      </CategoryTopContainer>
      <CategoryMiddleContainer>
        <img src={imgSize(photo, 200)} alt="img" />
      </CategoryMiddleContainer>
      <CategoryBoxButton
        type="button"
        data-testid="CBbt"
        onClick={handleClicked}
      >
        {name}
      </CategoryBoxButton>
    </CategoryBoxContainer>
  );
};

CategoryBoxSingle.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
};

CategoryBoxSingle.defaultProps = {
  name: '',
  photo: '',
  category: '',
  id: 0,
};
export default CategoryBoxSingle;
