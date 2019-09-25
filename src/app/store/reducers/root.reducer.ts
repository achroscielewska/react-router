import { Reducer, combineReducers } from 'redux';

import appReducer from './app/app.reducer'
import postReducer from './post/post.reducer';



export const rootReducer: Reducer = combineReducers({ appReducer, postReducer });

export type ReduxState = {
  appReducer: {
    token: string;
    error: boolean;
    isHomePage: boolean,
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
