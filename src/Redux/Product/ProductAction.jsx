import {
  Product,
  productMainImageURL,
  ProductMainStyle,
  ProductId,
} from './ProductType';

export const ProductEnter = (object = {}) => ({
  type: Product,
  payload: object,
});

export const ProductMainImageSelected = (url = './icon/no.jpeg') => ({
  type: productMainImageURL,
  payload: url,
});

export const ProductMainStyleSelected = (object = {}) => ({
  type: ProductMainStyle,
  payload: object,
});

export const ProductIdSelected = (id = 0) => ({
  type: ProductId,
  payload: id,
});
