import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('curentState:', store.getState());

  next(action);

  console.log('next state:', store.getState());
};


const middleWares = [loggerMiddleware];

const middlewareEnhancer = applyMiddleware(...middleWares);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;



