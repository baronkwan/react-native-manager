import {
  LOGIN_CREDENTIALS_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case EMAIL_CHANGED:
    //   console.log(action);
    //   return { ...state, email: action.payload };
    // case PASSWORD_CHANGED:
    //   console.log(action);
    //   return { ...state, password: action.payload };
    case LOGIN_CREDENTIALS_UPDATE:
      console.log(action);
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER_START:
      console.log(action);
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      console.log(action);
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      console.log(action);
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
