import { TOOGLE_USERID } from '../actions/loginActions';

const initialState = {
  email: null,
};

const loginReducer = (state = initialState, action) => {
  console.log('loginReducer', action.email)
  switch (action.type) {
    case TOOGLE_USERID:
      return {
        ...state, email: action.email,
      };
    default:
      return state;
  }
};


export default loginReducer;
