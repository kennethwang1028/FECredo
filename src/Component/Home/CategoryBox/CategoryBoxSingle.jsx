import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import imgSize from '../../Function/imgSize';
import {
  SetProductId,
} from '../../../Redux';

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
  const dispatch = useDispatch();
  let url;
  if (photo) {
    url = imgSize(photo, 200);
  } else {
    url = './icon/no.jpeg';
  }

  const handleClicked = () => {
    history.push('/product');
    dispatch(SetProductId(id));
  };

  return (
    <CategoryBoxContainer>
      <CategoryTopContainer>
        {category}
      </CategoryTopContainer>
      <CategoryMiddleContainer>
        <img
          src={url}
          width="200"
          height="200"
          alt="img"
        />
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
