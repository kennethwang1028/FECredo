import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  SetProductId,
} from '../../../Redux';

import {
  ContainerStyle,
  ColumnContainerStyle,
  RowContainerStyle,
  ImgStyle,
  TextStyle,
} from '../infoCardStyles';

const InfoCardRow = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    description,
    productid,
    productname,
    slogan,
    url,
    features,
    width,
  } = props;

  const handleClicked = () => {
    dispatch(SetProductId(productid));
    history.push('/product');
  };

  return (
    <ContainerStyle
      width={width}
      type="button"
      onClick={handleClicked}
    >
      <RowContainerStyle>
        <ColumnContainerStyle>
          <TextStyle
            fontSize="20"
          >
            {productname}
          </TextStyle>
          <ImgStyle
            src={url}
            alt="product"
            width={width * 0.4}
            height={width * 0.4}
          />
        </ColumnContainerStyle>
        <ColumnContainerStyle width={width * 0.6}>
          <TextStyle
            fontSize="18"
          >
            {slogan}
          </TextStyle>
          <TextStyle
            fontSize="16"
          >
            {description}
          </TextStyle>
        </ColumnContainerStyle>
      </RowContainerStyle>
      <RowContainerStyle>
        {features.map((i) => (
          <TextStyle
            key={i}
            fontSize="18"
          >
            {i}
          </TextStyle>
        ))}
      </RowContainerStyle>
    </ContainerStyle>
  );
};
InfoCardRow.propTypes = {
  width: PropTypes.number,
  description: PropTypes.string,
  productid: PropTypes.number,
  productname: PropTypes.string,
  slogan: PropTypes.string,
  url: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

InfoCardRow.defaultProps = {
  width: 0,
  description: '',
  productid: 0,
  productname: '',
  slogan: '',
  url: '',
  features: [],
};
export default InfoCardRow;
