import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';


const middleWares = [logger];

const middlewareEnhancer = applyMiddleware(...middleWares);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;



