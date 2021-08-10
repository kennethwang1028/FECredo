import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductStyles from './ProductStyles/ProductStyles';

import {
  ProductInfoContainer,
  ProductText,
  Row,
  Column,
  Select,
} from '../../ProductStyle';

const ProductInfo = () => {
  const product = useSelector((state) => state.product.product);
  const width = useSelector((state) => state.window.windowWidth);
  const style = useSelector((state) => state.product.productMainStyle);
  const skus = useSelector((state) => state.product.productMainStyle.skus)
  || [{ skusId: 0, qty: 0 }];

  const [sizeId, setSizeId] = useState(skus[0].skusId);
  const [maxQty, setMaxQty] = useState(skus[0].qty);
  const [qty, setQty] = useState(0);

  const handleChangeSize = (event) => {
    const skusObj = skus.filter((i) => i.size === event.target.value);
    setSizeId(skusObj[0].skusId);
    setMaxQty(skusObj[0].qty);
    setQty(1);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  return (
    <ProductInfoContainer isRow={width > 700}>
      <Row>
        <ProductText size={3}>{product.name}</ProductText>
        <ProductText size={2}>{product.category}</ProductText>
      </Row>
      <Row>
        <Column>
          <div>{style.styleName}</div>
          <div>{product.slogan}</div>
          <div>
            Price: $
            {' '}
            {style.price}
            .00
          </div>
          {style.onSale !== 'null'
            ? (
              <ProductText color="red">
                onSale-Price: $
                {' '}
                {style.onSale}
                .00
              </ProductText>
            )
            : (
              <ProductText color="black">ji</ProductText>
            )}
        </Column>
        {skus[0].skusId === 0 ? <ProductText color="red">No Available</ProductText>
          : (
            <Column>
              <Row>
                <div>Size:</div>
                <Select
                  isRow={width > 700}
                  onChange={handleChangeSize}
                >
                  {skus.map((i) => (
                    <option key={i.skusId}>{i.size}</option>
                  ))}
                </Select>
              </Row>
              <Row>
                {maxQty <= 5 && maxQty !== 0 ? (
                  <ProductText color="red">
                    {`last ${maxQty}`}
                  </ProductText>
                ) : null}
              </Row>
              <Row>
                <div>Qty:</div>
                {maxQty === 0
                  ? <ProductText color="red">Out of Stock </ProductText>
                  : (
                    <Select
                      isRow={width > 700}
                      onChange={handleChangeQty}
                    >
                      {[...Array(maxQty)].map((i, index) => (
                        <option key={index}>{index + 1}</option>
                      ))}
                    </Select>
                  )}
              </Row>
            </Column>
          )}
      </Row>
      <Row>
        {product.description}
      </Row>
      <Row>
        {product.feature ? product.feature.map((i, index) => (
          <div key={index}>
            {i.name}
            {' '}
            :
            {' '}
            {i.value}
          </div>
        )) : null}
      </Row>
      <Row>
        <ProductStyles />
        <Column>
          <ProductText color="red">
            {' '}
            Total : $
            {qty * style.onSale || qty * style.price}
            .00
          </ProductText>
          <button>Add to Cart</button>
        </Column>

      </Row>

    </ProductInfoContainer>
  );
};

export default ProductInfo;
