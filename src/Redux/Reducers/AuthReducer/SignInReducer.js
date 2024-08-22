// src/Reducers/AuthReducer/SignInReducer.js
import { SIGNIN_FAIL, SIGNIN_PENDING, SIGNIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../../Actions/Types";

const initialState = {
    signIn: [],
    isLoggedIn: false,
    isLoading: false,
};

const signin_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                signIn: payload.signIn,
                isLoggedIn: true,
                isLoading: false,
            };
        case SIGNIN_PENDING:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: true,
            };
        case SIGNIN_FAIL:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                signIn: [],
                isLoggedIn: false,
                isLoading: false,
            };
        case LOGOUT_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default signin_reducer;
