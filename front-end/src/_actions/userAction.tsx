import { REGISTER_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "/api/user";

type Data = {};

export const registerUser = (dataToSubmit: any) => {
  const data: Data = request("post", USER_URL + "/register", dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
};
