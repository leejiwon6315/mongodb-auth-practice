import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../_actions/types";

const userReducer = (state = {}, action: any) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };

    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case LOGOUT_USER:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};

export default userReducer;
