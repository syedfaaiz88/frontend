import {
    GET_PROFILE_DETAILS_FAIL,
    GET_PROFILE_DETAILS_PENDING,
    GET_PROFILE_DETAILS_SUCCESS,
  } from "../Actions/Types";
  
  const initialState = {
    getProfileDetails: null,
    errors: {},
    isLoading: false,
  };
  const get_profile_details_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PROFILE_DETAILS_SUCCESS:
        return {
          ...state,
          getProfileDetails: payload.getProfileDetails,
          errors: {},
          isLoading: false,
        };
      case GET_PROFILE_DETAILS_PENDING:
        return {
          ...state,
          getProfileDetails: payload.getProfileDetails,
          isLoading: true,
        };
      case GET_PROFILE_DETAILS_FAIL:
        return {
          ...state,
          getProfileDetails: [],
          errors: action.payload.errors,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  export default get_profile_details_reducer;
  