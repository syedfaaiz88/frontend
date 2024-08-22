import { GENDERS_FAIL, GENDERS_PENDING, GENDERS_SUCCESS } from "../Actions/Types";

const initialState = {
    getGenders: [],
};
const gender_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GENDERS_SUCCESS:
            return {
                ...state,
                getGenders: payload.getGenders,
            };
        case GENDERS_PENDING:
            return {
                ...state,
                getGenders: payload.getGenders,
            };
        case GENDERS_FAIL:
            return {
                ...state,
                getGenders: [],
            };

        default:
            return state;
    }
};
export default gender_reducer;