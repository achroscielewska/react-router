import { Reducer, combineReducers } from 'redux';

import appReducer from './app/app.reducer'
import postReducer from './post/post.reducer';



export const rootReducer: Reducer = combineReducers({ appReducer, postReducer });

export type ReduxState = {
  appReducer: {
    isAuthorized: boolean;
    error: boolean;
    homePageContent: any,
    postsPageContent: any;
    albumsPageContent: any;
    newPostPageContent: any;
  },
  postReducer: {
    post: any;
    error: boolean;
  }
};
