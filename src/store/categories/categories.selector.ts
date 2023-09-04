import { RootState } from "store/store";
import { CategoriesDataType, RawCategoryType } from "./categories.types";

export const selectCategories = (state: RootState): CategoriesDataType =>
  state.categories.categories
    .reduce((acc: CategoriesDataType, category: RawCategoryType) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})