import {
    APP_INIT,
    APP_SUBMIT_FAIL,
    APP_SUBMIT,
  } from '../ReduxTypes';
  
const INITIAL_STATE = {
    errorMessage: null,
};
export default (state = INITIAL_STATE, action: actionType) => {
    switch (action.type) {
        case APP_INIT:
            return INITIAL_STATE
        case APP_SUBMIT:
            return { errorMessage: action.payload };
        case APP_SUBMIT_FAIL:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};
