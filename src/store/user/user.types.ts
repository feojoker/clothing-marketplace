import { User } from "firebase/auth";

export type UserActionTypes = 'user/SET_USER_DATA';

export type UserReducerState = {
  currentUser: User | null,
}

export type UserReducerAction = {
  type: UserActionTypes,
  payload: User | null,
}