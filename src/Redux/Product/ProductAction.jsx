import axios from 'axios';

import {
  Product,
  productMainImageURL,
  ProductMainStyle,
  ProductId,
  ProductList,
  ProductIdList,
} from './ProductType';

export const SetProduct = (object = {}) => ({
  type: Product,
  payload: object,
});

export const SetProductMainImage = (url = './icon/no.jpeg') => ({
  type: productMainImageURL,
  payload: url,
});

export const SetProductMainStyle = (object = {}) => ({
  type: ProductMainStyle,
  payload: object,
});

export const SetProductId = (id = 0) => ({
  type: ProductId,
  payload: id,
});

export const SetProductList = (list = []) => ({
  type: ProductList,
  payload: list,
});

export const SetProductIdList = (list = []) => ({
  type: ProductIdList,
  payload: list,
});

export const FetchProduct = ({
  dispatch = () => ('function'),
  productId = 1,
  func = () => {},
  productList = [],
  productIdList = [],
}) => {
  axios(`http://localhost:3001/SDCredo/product/${productId}`)
    .then((res) => {
      const data = res.data[0];
      const style = data.styles[0];
      const photo = null || style.photos[0];
      dispatch(SetProduct(data));
      dispatch(SetProductMainStyle(style));
      dispatch(SetProductMainImage(photo));
      func(true);
      dispatch(SetProductList([...productList, data]));
      dispatch(SetProductIdList([...productIdList, data.productid]));
    })
    .catch((err) => console.log(err));
};
