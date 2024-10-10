import {
  EDIT_PROFILE_DETAILS_FAIL,
  EDIT_PROFILE_DETAILS_PENDING,
  EDIT_PROFILE_DETAILS_SUCCESS,
} from "../Actions/Types";

const initialState = {
  editProfileDetails: null,
  errors: {},
  isLoading: false,
};
const edit_profile_details_reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        editProfileDetails: payload.editProfileDetails,
        errors: {},
        isLoading: false,
      };
    case EDIT_PROFILE_DETAILS_PENDING:
      return {
        ...state,
        editProfileDetails: payload.editProfileDetails,
        isLoading: true,
      };
    case EDIT_PROFILE_DETAILS_FAIL:
      return {
        ...state,
        editProfileDetails: [],
        errors: action.payload.errors,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default edit_profile_details_reducer;
