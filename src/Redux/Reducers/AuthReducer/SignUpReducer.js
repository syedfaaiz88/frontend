import { SIGNUP_FAIL, SIGNUP_PENDING, SIGNUP_SUCCESS, RESET_SIGNUP_STATE } from "../../Actions/Types";

const initialState = {
    signUp: [],
    errors: {},
    isLoading: false
};

const signup_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_PENDING:
            return {
                ...state,
                isLoading: true,  // Set isLoading to true when signup is pending
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signUp: action.payload,
                errors: {},
                isLoading: false,  // Set isLoading to false on success
            };
        case SIGNUP_FAIL:
            return {
                ...state,
                signUp: [],
                errors: action.payload.errors,
                isLoading: false,  // Set isLoading to false on failure
            };
        case RESET_SIGNUP_STATE:
            return {
                ...state,
                signUp: initialState.signUp,
                errors: initialState.errors,
                isLoading: false,  // Ensure isLoading is reset
            };
        default:
            return state;
    }
};

export default signup_reducer;
