import { combineReducers } from 'redux';
import signup_reducer from './AuthReducer/SignUpReducer';
import signin_reducer from './AuthReducer/SignInReducer';
import gender_reducer from './GendersReducer';
import change_password_reducer from './ChangePasswordReducer';


export default combineReducers({
  signup_reducer,
  signin_reducer,
  gender_reducer,
  change_password_reducer
});
