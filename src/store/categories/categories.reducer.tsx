import { CategoriesReducerAction, CategoriesReducerState } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
}

export const categoriesReducer = (
  state: CategoriesReducerState = CATEGORIES_INITIAL_STATE,
  action: CategoriesReducerAction
) => {
  const { type, payload } = action;

  switch (type) {
    case 'categories/SET_CATEGORIES':
      return {
        ...state,
        categories: payload,
      }
    default:
      return state
  }

}