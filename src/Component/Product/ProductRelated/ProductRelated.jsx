import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import InfoCardSingle from '../../InfoCard/InfoCardSingle';

import {
  ProductStylesButton,
  ProductDetailContainer,
} from '../ProductStyle';

const ProductRelated = () => {
  const width = useSelector((state) => state.window.windowWidth);
  const relateproduct = useSelector((state) => state.product.product.relateproduct) || [];
  const len = relateproduct.length;
  const howManyShowed = Math.floor((width - 100) / 250);

  const [showList, setShowList] = useState(relateproduct.slice(0, howManyShowed));
  const [startCount, setStartCount] = useState(0);

  useEffect(() => {
    setShowList(relateproduct.slice(0, howManyShowed));
  }, [relateproduct, width]);

  const handleClickedNext = () => {
    let newStart = startCount + howManyShowed;
    const newArray = relateproduct.concat(relateproduct);
    if (newStart > len) {
      newStart -= len;
    }
    setStartCount(newStart);
    setShowList(newArray.slice(newStart, newStart + howManyShowed));
  };

  const handleClickedPrev = () => {
    let newStart = startCount - howManyShowed;
    const newArray = relateproduct.concat(relateproduct);
    if (newStart < 0) {
      newStart += len;
    }
    setStartCount(newStart);
    setShowList(newArray.slice(newStart, newStart + howManyShowed));
  };

  return (
    <ProductDetailContainer isRow>
      <ProductStylesButton
        type="button"
        onClick={handleClickedPrev}
      >
        {'<<'}
      </ProductStylesButton>
      {showList.map((i) => (
        <InfoCardSingle
          key={i.id}
          id={i.id}
          name={i.name}
          photo={i.photo}
          slogan={i.slogan}
          feature={i.feature}
        />
      ))}
      <ProductStylesButton
        type="button"
        onClick={handleClickedNext}
      >
        {'>>'}
      </ProductStylesButton>
    </ProductDetailContainer>
  );
};

export default ProductRelated;
