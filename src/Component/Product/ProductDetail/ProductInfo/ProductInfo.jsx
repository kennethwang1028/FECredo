import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductStylesImages from './ProductStylesImages/ProductStylesImages';

import {
  ContainerStyle,
  RowStyle,
  ProductTextStyle,
  StylesButtonStyle,
  ColumnEnd,
  Column,
  Select,
} from '../../ProductStyle';

const ProductInfo = () => {
  const width = useSelector((state) => state.window.countInfoWidth);
  const {
    categoriesList,
  } = useSelector((state) => state.basicInfo);
  const {
    product,
    productMainStyle,
  } = useSelector((state) => state.product);

  const category = categoriesList.filter(
    (i) => i.categoryid === product.category.categoryid,
  );

  const {
    onsale,
    price,
    skus,
    stylename,
  } = productMainStyle;

  const [sizeId, setSizeId] = useState(skus[0].skusid);
  const [maxQty, setMaxQty] = useState(skus[0].quantity);
  const [qty, setQty] = useState(0);

  const handleChangeSize = (event) => {
    const skusObj = skus.filter((i) => i.size === event.target.value);
    setSizeId(skusObj[0].skusid);
    setMaxQty(skusObj[0].quantity);
    setQty(1);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  return (
    <ContainerStyle width={width > 700 ? width * 0.4 : width}>
      <RowStyle>
        <ProductTextStyle
          fontSize="20"
        >
          {product.productname}
        </ProductTextStyle>
        <ProductTextStyle
          fontSize="18"
        >
          {category[0].categoryname}
        </ProductTextStyle>
      </RowStyle>
      <RowStyle>
        <Column>
          <ProductTextStyle
            fontSize="18"
          >
            {stylename}
          </ProductTextStyle>
          <ProductTextStyle
            fontSize="16"
          >
            {product.slogan}
          </ProductTextStyle>
          {onsale !== 0
            ? (
              <ProductTextStyle
                fontSize="16"
                color="red"
              >
                {`onSale-Price: $ ${onsale}.00`}
              </ProductTextStyle>
            )
            : (
              <ProductTextStyle
                fontSize="16"
                color="black"
              >
                ji
              </ProductTextStyle>
            )}
          <ProductTextStyle
            fontSize="16"
          >
            {`Price: $ ${price}.00`}
          </ProductTextStyle>
        </Column>
        {skus[0].skusid === 0
          ? (
            <ProductTextStyle
              fontSize="16"
            >
              No Available
            </ProductTextStyle>
          )
          : (
            <Column>
              <RowStyle>
                <ProductTextStyle
                  fontSize="16"
                >
                  Size:
                </ProductTextStyle>
                <Select
                  isRow={width > 700}
                  onChange={handleChangeSize}
                >
                  {skus.map((i) => (
                    <option
                      key={i.skusid}
                    >
                      {i.size}
                    </option>
                  ))}
                </Select>
              </RowStyle>
              <RowStyle>
                {maxQty <= 5 && maxQty !== 0 ? (
                  <ProductTextStyle
                    color="red"
                  >
                    {`last ${maxQty}`}
                  </ProductTextStyle>
                ) : null}
              </RowStyle>
              <RowStyle>
                <ProductTextStyle>
                  Qty:
                </ProductTextStyle>
                {maxQty === 0
                  ? (
                    <ProductTextStyle
                      color="red"
                    >
                      Out of Stock
                    </ProductTextStyle>
                  )
                  : (
                    <Select
                      isRow={width > 700}
                      onChange={handleChangeQty}
                    >
                      {[...Array(maxQty)].map((i, index) => (
                        <option
                          key={index}
                        >
                          {index + 1}
                        </option>
                      ))}
                    </Select>
                  )}
              </RowStyle>
            </Column>
          )}
      </RowStyle>
      <RowStyle>
        <ProductTextStyle>
          {product.description}
        </ProductTextStyle>
      </RowStyle>
      <RowStyle>
        {product.featurevalue.map((i) => (
          <ProductTextStyle
            key={i}
          >
            {i}
          </ProductTextStyle>
        ))}
      </RowStyle>
      <RowStyle>
        <ProductStylesImages />
        <ColumnEnd>
          <ProductTextStyle
            color="yellow"
          >
            {`Total : $${qty * onsale || qty * price}.00`}
          </ProductTextStyle>
          <StylesButtonStyle
            width="50"
            heigth="50"
            onClick={() => console.log('hi')}
          >
            Add to Cart
          </StylesButtonStyle>
        </ColumnEnd>
      </RowStyle>
    </ContainerStyle>
  );
};

export default ProductInfo;
