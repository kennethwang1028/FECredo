import React from 'react';

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

const TopImageSelector = () => {
  const {
    HandleClickedRight,
    HandleClickedLeft,
    topImageInfo,
    imagePosition,
  } = useTopImageSelector(TopData);

  return (
    <TopContainer
      image={imgSize(topImageInfo.url, 250)}
    >
      <TopButton
        data-testid="leftbutton"
        onClick={HandleClickedLeft}
      >
        {'<<'}
      </TopButton>
      {imagePosition === 0 ? <TopImage src={imgSize(topImageInfo.url, 250)} /> : null}
      <TopText>
        <div>
          {topImageInfo.name}
        </div>
        <TopTextP>
          {topImageInfo.slogan}
        </TopTextP>
      </TopText>
      {imagePosition === 1 ? <TopImage src={imgSize(topImageInfo.url, 250)} /> : null}
      <TopText>
        {`Price: $ ${topImageInfo.default_price}.00`}
        <TopCheckButton>
          check
        </TopCheckButton>
      </TopText>
      {imagePosition === 2 ? <TopImage src={imgSize(topImageInfo.url, 250)} /> : null}
      <TopButton
        data-testid="rightbutton"
        onClick={HandleClickedRight}
      >
        {'>>'}
      </TopButton>
    </TopContainer>
  );
};

export default TopImageSelector;
