import {
  Product,
  ProductMainImage,
} from './ProductType';

const initState = {
  product: {},
  productMainImage: 0,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case ProductMainImage: return {
      ...state,
      productMainImage: action.payload,
    };
    case Product: return {
      ...state,
      product: action.payload,
    };
    default: return state;
  }
};

export default productReducer;
