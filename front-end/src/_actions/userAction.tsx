import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, AUTH_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "/api/user";

export const registerUser = (dataToSubmit: any) => {
  const data = request("post", USER_URL + "/register", dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
};

export const loginUser = (dataToSubmit: any) => {
  const data = request("post", USER_URL + "/login", dataToSubmit);

  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const logoutUser = () => {
  const data = request("post", USER_URL + "/logout", null);

  return {
    type: LOGOUT_USER,
    payload: data,
  };
};

export const authUser = () => {
  const data = request("post", USER_URL + "/auth", null);

  return {
    type: AUTH_USER,
    payload: data,
  };
};
