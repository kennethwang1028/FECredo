import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import {
  SetProductId,
} from '../../../Redux';

import {
  InfoCardContainerStyle,
  TextStyle,
  SmallContainerStyle,
  ImgStyle,
} from '../infoCardStyles';

console.error('url add productid');

const InfoCardSingle = (props) => {
  const {
    id,
    name,
    photo,
    slogan,
    feature,
    category,
  } = props;

  // const history = useHistory();
  const dispatch = useDispatch();

  const handleClicked = () => {
    // history.push(`/product/${id}`);
    dispatch(SetProductId(id));
  };

  return (
    <InfoCardContainerStyle
      type="button"
      onClick={handleClicked}
    >
      <SmallContainerStyle
        height="22"
      >
        <TextStyle
          fontSize="18"
        >
          {category}
        </TextStyle>
      </SmallContainerStyle>
      <SmallContainerStyle
        height="60"
      >
        <TextStyle
          fontSize="18"
        >
          {slogan}
        </TextStyle>
      </SmallContainerStyle>
      <SmallContainerStyle
        height="200px"
      >
        <ImgStyle
          src={photo}
          width="250"
          height="250"
          alt="ImgStyle"
        />
      </SmallContainerStyle>
      <SmallContainerStyle
        height="60"
      >
        <TextStyle
          fontSize="20"
        >
          {name}
        </TextStyle>
      </SmallContainerStyle>
      <SmallContainerStyle
        height="70"
      >
        {feature.map((i) => (
          <TextStyle
            fontSize="14"
            key={i}
          >
            {i}
          </TextStyle>
        ))}
      </SmallContainerStyle>
    </InfoCardContainerStyle>
  );
};

InfoCardSingle.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  slogan: PropTypes.string,
  feature: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

InfoCardSingle.defaultProps = {
  name: '',
  photo: '',
  category: '',
  slogan: '',
  id: 0,
  feature: [''],
};
export default InfoCardSingle;
