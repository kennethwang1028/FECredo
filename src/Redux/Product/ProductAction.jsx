import {
  Product,
  ProductMainImage,
} from './ProductType';

export const ProductEnter = (object = {}) => ({
  type: Product,
  payload: object,
});

export const ProductMainImageSelected = (index = 0) => ({
  type: ProductMainImage,
  payload: index,
});
