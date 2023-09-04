import { User } from "firebase/auth";
import { createAction } from "utils/reducer/reducer.utils";
import { UserActionTypes } from "./user.types";

export const setUserData = (user: User) =>
  createAction<UserActionTypes, User>('user/SET_USER_DATA', user)
