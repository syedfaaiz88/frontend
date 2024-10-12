import {
    IS_USERNAME_AVAILABLE_FAIL,
    IS_USERNAME_AVAILABLE_PENDING,
    IS_USERNAME_AVAILABLE_SUCCESS,
  } from "../Actions/Types";
  
  const initialState = {
    isUsernameAvailable: null,
    errors: null,
    isLoading: false,
  };
  const is_username_available_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case IS_USERNAME_AVAILABLE_SUCCESS:
        return {
          ...state,
          isUsernameAvailable: payload.isUsernameAvailable,
          errors: null,
          isLoading: false,
        };
      case IS_USERNAME_AVAILABLE_PENDING:
        return {
          ...state,
          isUsernameAvailable: payload.isUsernameAvailable,
          isLoading: true,
        };
      case IS_USERNAME_AVAILABLE_FAIL:
        return {
          ...state,
          isUsernameAvailable: [],
          errors: action.payload.errors,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  export default is_username_available_reducer;
  