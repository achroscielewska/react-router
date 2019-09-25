import * as actionTypes from '../../actions/actionTypes';
import { Reducer } from 'redux';
import { HOME_PAGE_CONTENT, POSTS_PAGE_CONTENT, ALBUMS_PAGE_CONTENT, NEW_POST_PAGE_CONTENT } from '../../../../assets/appData/pageContent';


type State = {
  token: string;
  error: boolean;
  isHomePage: boolean;
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
  token: '',
  error: false,
  isHomePage: false,
  homePageContent: HOME_PAGE_CONTENT,
  postsPageContent: POSTS_PAGE_CONTENT,
  albumsPageContent: ALBUMS_PAGE_CONTENT,
  newPostPageContent: NEW_POST_PAGE_CONTENT
};

const appReducer: Reducer<State, Action> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_HOME_PAGE:
      return {
        ...state,
        isHomePage: true
      }
    case actionTypes.LEAVE_HOME_PAGE:
      return {
        ...state,
        isHomePage: false
      }
  }
  return state;
};

export default appReducer;
