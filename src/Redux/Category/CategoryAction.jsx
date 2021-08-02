import {
  CategoryTypeId,
  CategoryTypeName,
  CategorySearchText,
} from './CategoryType';

export const CategoryIdSelected = (categoryId = 0) => ({
  type: CategoryTypeId,
  payload: categoryId,
});

export const CategoryNameSelected = (categoryName = 'All') => ({
  type: CategoryTypeName,
  payload: categoryName,
});

export const CategoryTextSearch = (textSearch = '') => ({
  type: CategorySearchText,
  payload: textSearch,
});
