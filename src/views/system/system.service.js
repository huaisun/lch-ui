import Axios from "axios";

export const login = params => {
  return Axios.post("/lch/user/login", params);
};

export const checkDomain = params => {
  return Axios.get("/lch/user/checkDomain", { params });
};

export const checkPassword = params => {
  return Axios.get("/lch/user/checkPassword", { params });
};
