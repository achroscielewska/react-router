import * as actionTypes from '../actionTypes';
import { POSTS_LIST } from '../../../../assets/appData/pageContent';


export const getOnePost = (post: any) => {
    return {
        type: actionTypes.GET_ONE_POST,
        payload: post
    }
}

export const getPost = (id: number) => {
    let postsList = []
    postsList = POSTS_LIST

    const post = postsList.find(p => p.id === +id);
    return getOnePost(post); 
}