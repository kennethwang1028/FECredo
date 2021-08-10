import {
  Product,
  productMainImageURL,
  ProductMainStyle,
  ProductId,
} from './ProductType';

const initState = {
  product: {},
  productId: 1,
  productMainImageURL: 0,
  productMainStyle: {},
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case productMainImageURL: return {
      ...state,
      productMainImageURL: action.payload,
    };
    case Product: return {
      ...state,
      product: action.payload,
    };
    case ProductMainStyle: return {
      ...state,
      productMainStyle: action.payload,
    };
    case ProductId: return {
      ...state,
      productId: action.payload,
    };
    default: return state;
  }
};

export default productReducer;
