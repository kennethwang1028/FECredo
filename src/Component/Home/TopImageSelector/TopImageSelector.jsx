import React, { useState, useEffect } from 'react';

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
  const topData = TopData.TopData; // need to change

  const [topImageInfo, setTopImageInfo] = useState(topData[0]);
  const [topIndex, setTopIndex] = useState(0);
  const [isTime, setIsTime] = useState(true);
  const [imagePosition, setImagePosition] = useState(0);

  const len = topData.length;

  useEffect(() => {
    setTimeout(() => {
      if (topIndex >= len - 1) {
        setTopIndex(0);
      } else {
        setTopIndex(topIndex + 1);
      }
      const num = Math.floor(Math.random() * 3);
      setTopImageInfo(topData[topIndex]);
      setIsTime(!isTime);
      setImagePosition(num);
    }, 5000);
  }, [isTime]);

  const HandleClickedLeft = () => {
    if (topIndex === 0) {
      setTopIndex(len - 1);
    } else {
      setTopIndex(topIndex - 1);
    }
    setTopImageInfo(topData[topIndex]);
  };

  const HandleClickedRight = () => {
    if (topIndex === len - 1) {
      setTopIndex(0);
    } else {
      setTopIndex(topIndex + 1);
    }
    setTopImageInfo(topData[topIndex]);
  };

  return (
    <TopContainer
      image={topImageInfo.url}
    >
      <TopButton
        onClick={HandleClickedLeft}
      >
        {'<<'}
      </TopButton>
      {imagePosition === 0 ? <TopImage src={topImageInfo.url} /> : null}
      <TopText>
        <div>
          {topImageInfo.name}
        </div>
        <TopTextP>
          {topImageInfo.slogan}
        </TopTextP>
      </TopText>
      {imagePosition === 1 ? <TopImage src={topImageInfo.url} /> : null}
      <TopText>
        {`Price: $ ${topImageInfo.default_price}.00`}
        <TopCheckButton>
          check
        </TopCheckButton>
      </TopText>
      {imagePosition === 2 ? <TopImage src={topImageInfo.url} /> : null}
      <TopButton
        onClick={HandleClickedRight}
      >
        {'>>'}
      </TopButton>
    </TopContainer>
  );
};

export default TopImageSelector;
