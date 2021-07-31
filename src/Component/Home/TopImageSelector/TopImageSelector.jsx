import React from 'react';
import PropTypes from 'prop-types';

import useTopImageSelector from './useTopImageSelector';
import imgSize from '../../Function/imgSize';

import {
  TopContainer,
  TopButton,
  TopImage,
  TopText,
  TopTextP,
  TopCheckButton,
} from '../HomeStyle';

import TopData from '../homeData';
// fetch

const TopImageSelector = ({ testPosition }) => {
  const {
    HandleClickedRight,
    HandleClickedLeft,
    topImageInfo,
    imagePosition,
  } = useTopImageSelector(TopData);
  const showPosition = testPosition || imagePosition;
  return (
    <TopContainer
      image={imgSize(topImageInfo.photo, 250)}
    >
      <TopButton
        data-testid="leftbutton"
        onClick={HandleClickedLeft}
      >
        {'<<'}
      </TopButton>
      {showPosition === 0
        ? (
          <TopImage
            data-testid="topimage"
            src={imgSize(topImageInfo.photo, 250)}
          />
        )
        : null}
      <TopText>
        <div>
          {topImageInfo.name}
        </div>
        <TopTextP>
          {topImageInfo.slogan}
        </TopTextP>
      </TopText>
      {showPosition === 1
        ? (
          <TopImage
            data-testid="topimage"
            src={imgSize(topImageInfo.photo, 250)}
          />
        )
        : null}
      <TopText>
        {`Price: $ ${topImageInfo.default_price}.00`}
        <TopCheckButton>
          check
        </TopCheckButton>
      </TopText>
      {showPosition === 2
        ? (
          <TopImage
            data-testid="topimage"
            src={imgSize(topImageInfo.photo, 250)}
          />
        )
        : null}
      <TopButton
        data-testid="rightbutton"
        onClick={HandleClickedRight}
      >
        {'>>'}
      </TopButton>
    </TopContainer>
  );
};

TopImageSelector.propTypes = {
  testPosition: PropTypes.number,
};

TopImageSelector.defaultProps = {
  testPosition: 0,
};

export default TopImageSelector;
