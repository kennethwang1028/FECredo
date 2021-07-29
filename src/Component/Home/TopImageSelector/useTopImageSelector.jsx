import { useState, useEffect } from 'react';

const useTopImageSelector = (TopData) => {
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
    }, 4000);
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
  return {
    HandleClickedRight,
    HandleClickedLeft,
    topImageInfo,
    imagePosition,
    topIndex,
  };
};

export default useTopImageSelector;
