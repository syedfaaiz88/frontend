import { combineReducers } from "redux";
import signup_reducer from "./AuthReducer/SignUpReducer";
import signin_reducer from "./AuthReducer/SignInReducer";
import gender_reducer from "./GendersReducer";
import change_password_reducer from "./ChangePasswordReducer";
import edit_profile_details_reducer from "./EditProfileDetailsReducer";
import get_profile_details_reducer from "./GetProfileDetailsReducer";
import edit_profile_picture_reducer from "./EditProfilePictureReducer";
import is_username_available_reducer from "./IsUsernameAvailableReducer";

export default combineReducers({
  signup_reducer,
  signin_reducer,
  gender_reducer,
  change_password_reducer,
  edit_profile_details_reducer,
  get_profile_details_reducer,
  edit_profile_picture_reducer,
  is_username_available_reducer
});
