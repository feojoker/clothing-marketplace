import { createAction } from "utils/reducer/reducer.utils";
import { CategoriesActionTypes, RawCategoryType } from "./categories.types";

export const setCategories = (categories: RawCategoryType[]) =>
  createAction<CategoriesActionTypes, RawCategoryType[]>('categories/SET_CATEGORIES', categories);