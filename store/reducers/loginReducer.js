import { TOOGLE_USERID } from '../actions/loginActions';

const initialState = {
  email: null,
  first_name: null,
  id: null,
};

const loginReducer = (state = initialState, action) => {
  console.log('loginReducer', action.email, action.first_name, action.id)
  switch (action.type) {
    case TOOGLE_USERID:
      return {
        ...state, email: action.email, first_name: action.first_name, id: action.id
      };
    default:
      return state;
  }
};


export default loginReducer;
