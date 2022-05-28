import { combineReducers } from 'redux';
import user from './UserReducer';
import error from './ErrorReducer';
import screenSize from './ScreenSizeReducer';

export default combineReducers({
  user,
  error,
  screenSize,
});
