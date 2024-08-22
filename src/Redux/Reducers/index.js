import { combineReducers } from 'redux';
import signup_reducer from './AuthReducer/SignUpReducer';
import signin_reducer from './AuthReducer/SignInReducer';
import gender_reducer from './GendersReducer';


export default combineReducers({
  signup_reducer,
  signin_reducer,
  gender_reducer
});
