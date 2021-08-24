import {
  CategoryMain,
  featureValuesSelectedList,
  SearchText,
  ProductsList,
  ProductsListLength,
  SearchPage,
} from './SearchType';

export const CategoryMainSelected = (categoryName = 'All') => ({
  type: CategoryMain,
  payload: categoryName,
});

export const SetFeatureValuesSelectedList = (featureIdList = []) => ({
  type: featureValuesSelectedList,
  payload: featureIdList,
});

export const SearchTextEnter = (textSearch = '') => ({
  type: SearchText,
  payload: textSearch,
});

export const ProductsListEnter = (productsList = []) => ({
  type: ProductsList,
  payload: productsList,
});

export const ProductsListLengthEnter = (productsListLength = 0) => ({
  type: ProductsListLength,
  payload: productsListLength,
});

export const SearchPageEnter = (page = 0) => ({
  type: SearchPage,
  payload: page,
});

// const dispatch= useDispatch();
// export const LoadProductsList = (dispatch)=>{
//   fetch('url')
//     .then((res)=>res.json())
//     .then((data)=>{
//       []
//       dispatch(SearchPageEnter(data));
//     })
// }