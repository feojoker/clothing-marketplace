import type { UserReducerAction, UserReducerState } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
}

export const userReducer = (state: UserReducerState = INITIAL_STATE, action: UserReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'user/SET_USER_DATA':
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }

}