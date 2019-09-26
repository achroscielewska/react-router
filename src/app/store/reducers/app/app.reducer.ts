import * as actionTypes from '../../actions/actionTypes';
import { Reducer } from 'redux';
import { HOME_PAGE_CONTENT, POSTS_PAGE_CONTENT, ALBUMS_PAGE_CONTENT, NEW_POST_PAGE_CONTENT, FAQ_PAGE_ONE, FAQ_PAGE_TWO } from '../../../../assets/appData/pageContent';
import { NAVIGATION_BTNS } from '../../../../assets/appData/appElements';


type State = {
  token: string;
  error: boolean;
  navBtns: any;
  homePageContent: any;
  postsPageContent: any;
  albumsPageContent: any;
  newPostPageContent: any;
  faqPageOne: any;
  faqPageTwo: any;
}

type Action = {
  type: string,
  payload: any
}

const initialState: State = {
  token: '',
  error: false,
  navBtns: NAVIGATION_BTNS,
  homePageContent: HOME_PAGE_CONTENT,
  postsPageContent: POSTS_PAGE_CONTENT,
  albumsPageContent: ALBUMS_PAGE_CONTENT,
  newPostPageContent: NEW_POST_PAGE_CONTENT,
  faqPageOne: FAQ_PAGE_ONE,
  faqPageTwo: FAQ_PAGE_TWO
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
