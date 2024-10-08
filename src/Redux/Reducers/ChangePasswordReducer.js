import { CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_PENDING, CHANGE_PASSWORD_SUCCESS } from "../Actions/Types";

const initialState = {
    changePassword: [],
    errors: {},
    isLoading: false    
};
const change_password_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changePassword: payload.changePassword,
                errors: {},
                isLoading: false,           
            };
        case CHANGE_PASSWORD_PENDING:
            return {
                ...state,
                changePassword: payload.changePassword,
                isLoading: true,
            };
        case CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                changePassword: [],
                errors: action.payload.errors,
                isLoading: false,             
            };

        default:
            return state;
    }
};
export default change_password_reducer;