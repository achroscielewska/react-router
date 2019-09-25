import * as actionTypes from '../actionTypes';

export const setHomePage = () => {
    return {
        type: actionTypes.SET_HOME_PAGE,
    }
}

export const leaveHomePage = () => {
    return {
        type: actionTypes.LEAVE_HOME_PAGE,
    }
}
