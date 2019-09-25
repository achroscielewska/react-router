import * as actionTypes from '../../actions/actionTypes';
import { Reducer } from 'redux';
import { HOME_PAGE_CONTENT, POSTS_PAGE_CONTENT, ALBUMS_PAGE_CONTENT, NEW_POST_PAGE_CONTENT } from '../../../../assets/appData/pageContent';


type State = {
  isAuthorized: boolean;
  error: boolean;
  homePageContent: any;
  postsPageContent: any;
  albumsPageContent: any;
  newPostPageContent: any;
}

type Action = {
  type: string,
  payload: any
}

const initialState: State = {
  isAuthorized: false,
  error: false,
  homePageContent: HOME_PAGE_CONTENT,
  postsPageContent: POSTS_PAGE_CONTENT,
  albumsPageContent: ALBUMS_PAGE_CONTENT,
  newPostPageContent: NEW_POST_PAGE_CONTENT
};

const appReducer: Reducer<State, Action> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        isAuthorized: true
      }
    case actionTypes.LOG_OUT:
      return {
        ...state,
        isAuthorized: false
      }
  }
  return state;
};

export default appReducer;
