export type CategoryProductType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

export type RawCategoryType = {
  title: string,
  items: CategoryProductType[],
}

export type CategoriesDataType = Record<string, CategoryProductType[]>;

export type CategoriesActionTypes = 'categories/SET_CATEGORIES';

export type CategoriesReducerState = {
  categories: RawCategoryType[]
}

export type CategoriesReducerAction = {
  type: CategoriesActionTypes,
  payload: RawCategoryType[]
}