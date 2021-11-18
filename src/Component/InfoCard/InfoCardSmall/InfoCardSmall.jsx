import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  SetProductId,
} from '../../../Redux';

import {
  ColumnButtonStyle,
  Img70Style,
  Text70Style,
} from '../infoCardStyles';

const InfoCardSmall = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    url,
    name,
    price,
    id,
  } = props;

  const handleClicked = () => {
    dispatch(SetProductId(id));
    history.push('/product');
  };

  return (
    <ColumnButtonStyle
      width={110}
      onClick={handleClicked}
    >
      <Img70Style
        alt="smallpicture"
        src={url}
        width="95"
        height="95"
      />
      <Text70Style>
        {name}
      </Text70Style>
      <Text70Style>
        {`$ ${price}.00`}
      </Text70Style>
    </ColumnButtonStyle>
  );
};

InfoCardSmall.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
};

InfoCardSmall.defaultProps = {
  url: '',
  name: '',
  price: 0,
  id: 1,
};

export default InfoCardSmall;
