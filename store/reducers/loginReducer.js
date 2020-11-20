import {TOOGLE_USERID} from '../actions/loginActions';

const initialState = {
  userId: null,
  userName:null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_USERID:
      return {...state, userId: action.userId,userName:action.userName};
    default:
      return state;
  }
};

export default loginReducer;
