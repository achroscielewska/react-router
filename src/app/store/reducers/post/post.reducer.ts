import * as actionTypes from '../../actions/actionTypes';
import { Reducer } from 'redux';

type State = {
    post: any;
    error: boolean;
}

type Action = {
    type: string,
    payload: any
}

const initialState: State = {
    post: { id: 0, title: '', content: '' },
    error: false,
};

const postReducer: Reducer<State, Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_ONE_POST:
            return {
                ...state,
                post: action.payload
            }
    }
    return state;
};

export default postReducer;
