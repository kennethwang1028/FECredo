import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import imgSize from '../Function/imgSize';

import {
  ProductIdSelected,
} from '../../Redux';

import {
  InfoCardContainer,
  SmallContainer,
  Text,
  Img,
} from './infoCardStyles';

const InfoCardSingle = (props) => {
  const {
    id,
    name,
    photo,
    slogan,
    feature,
    category,
  } = props;
  const history = useHistory();
  const width = useSelector((state) => state.window.windowWidth);
  const dispatch = useDispatch();
  let url;
  if (photo) {
    url = imgSize(photo, 200);
  } else {
    url = './icon/no.jpeg';
  }

  const handleClicked = () => {
    history.push(`/product/${id}`);
    dispatch(ProductIdSelected(id));
  };

  return (
    <InfoCardContainer
      type="button"
      onClick={handleClicked}
    >
      <SmallContainer
        width="200px"
        height={width > 700 ? '4vw' : '7vw'}
      >
        <Text
          fontSize={width > 700 ? 1.5 : 3}
        >
          {category}
          {slogan}
        </Text>
      </SmallContainer>
      <SmallContainer
        width="200px"
        height="200px"
      >
        <Img
          src={url}
          width="200"
          height="200"
          alt="img"
        />
      </SmallContainer>
      <SmallContainer
        width="200px"
        height={width > 700 ? '4vw' : '7vw'}
      >
        <Text
          height={4}
          fontSize={width > 700 ? 1.5 : 3}
        >
          {name}
        </Text>
      </SmallContainer>
      <SmallContainer
        width="200px"
      >
        {feature ? feature.map((i) => (
          <Text
            fontSize={width > 700 ? 1 : 3}
            key={i.name}
          >
            {i.value === 'null' ? i.name : i.value}
          </Text>
        )) : null}
      </SmallContainer>
    </InfoCardContainer>
  );
};

InfoCardSingle.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  slogan: PropTypes.string,
  feature: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
};

InfoCardSingle.defaultProps = {
  name: '',
  photo: '',
  category: '',
  slogan: '',
  id: 0,
  feature: [{ name: '', value: '' }],
};
export default InfoCardSingle;
