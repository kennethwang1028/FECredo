import React from 'react';
import { useSelector } from 'react-redux';

import urlCreated from '../../Function/urlCreated';
import InfoCardRow from '../../InfoCard/InfoCardRow/InfoCardRow';

import {
  ColumnContainerStyle,
} from '../SearchStyle';

const ProductList = () => {
  const { comsList } = useSelector((state) => state.basicInfo);
  const { productsList } = useSelector((state) => state.search);
  const { countInfoWidth } = useSelector((state) => state.window);

  return (
    <ColumnContainerStyle>
      {productsList.map((i) => (
        <InfoCardRow
          key={i.productid}
          width={Math.floor(countInfoWidth * 0.6)}
          description={i.description}
          productid={i.productid}
          productname={i.productname}
          slogan={i.slogan}
          url={urlCreated(i.photo, comsList)}
          features={i.features}
        />
      ))}
    </ColumnContainerStyle>
  );
};

export default ProductList;
