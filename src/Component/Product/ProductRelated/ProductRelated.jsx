import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import urlCreated from '../../Function/urlCreated';

import InfoCardSingle from '../../InfoCard/InfoCardSingle/InfoCardSingle';

import {
  ContainerStyle,
  RowConatainerStyle,
  ProductButtonStyle,
} from '../ProductStyle';

const ProductRelated = () => {
  const {
    comsList,
    categoriesList,
  } = useSelector((state) => state.basicInfo);
  let width = useSelector((state) => state.window.countInfoWidth);
  const relateproduct = useSelector((state) => state.product.product.relatedproducts);
  const len = relateproduct.length;
  if (width < 400) {
    width = 400;
  }
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
    <ContainerStyle
      width={width}
    >
      <RowConatainerStyle>
        <ProductButtonStyle
          type="button"
          onClick={handleClickedPrev}
        >
          {'<<'}
        </ProductButtonStyle>
        {showList.map((i) => (
          <InfoCardSingle
            key={i.productid}
            id={i.productid}
            name={i.productname}
            photo={urlCreated({
              photo: i.photo,
              comsList,
            })}
            slogan={i.slogan}
            feature={i.feature}
            category={categoriesList[i.category].categoryname}
          />
        ))}
        <ProductButtonStyle
          type="button"
          onClick={handleClickedNext}
        >
          {'>>'}
        </ProductButtonStyle>
      </RowConatainerStyle>
    </ContainerStyle>
  );
};

export default ProductRelated;
