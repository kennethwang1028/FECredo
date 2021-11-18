import {
  Product,
  productMainImageURL,
  ProductMainStyle,
  ProductId,
  ProductList,
  ProductIdList,
} from './ProductType';

const initState = {
  product: {},
  productId: 1,
  productMainImageURL: '',
  productMainStyle: {},
  productList: [],
  productIdList: [],
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
    case ProductList: return {
      ...state,
      productList: action.payload,
    };
    case ProductIdList: return {
      ...state,
      productIdList: action.payload,
    };
    default: return state;
  }
};

export default productReducer;
