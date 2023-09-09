import { RootState } from "store/store";
import type { CategoriesDataType, RawCategoryType } from "./categories.types";

import { createSelector } from 'reselect';

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories
      .reduce((acc: CategoriesDataType, category: RawCategoryType) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})
)


