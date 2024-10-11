import {
    EDIT_PROFILE_PICTURE_FAIL,
    EDIT_PROFILE_PICTURE_PENDING,
    EDIT_PROFILE_PICTURE_SUCCESS,
  } from "../Actions/Types";
  
  const initialState = {
    editProfilePicture: null,
    errors: {},
    isLoading: false,
  };
  const edit_profile_picture_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case EDIT_PROFILE_PICTURE_SUCCESS:
        return {
          ...state,
          editProfilePicture: payload.editProfilePicture,
          errors: {},
          isLoading: false,
        };
      case EDIT_PROFILE_PICTURE_PENDING:
        return {
          ...state,
          editProfilePicture: payload.editProfilePicture,
          isLoading: true,
        };
      case EDIT_PROFILE_PICTURE_FAIL:
        return {
          ...state,
          editProfilePicture: [],
          errors: action.payload.errors,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  export default edit_profile_picture_reducer;
  