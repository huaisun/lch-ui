import Axios from "axios";

export const addCatalogue = params => {
  return Axios.post("/lch/catalogue/addCatalogue", params);
};

export const getCatalogue = params => {
  return Axios.get("/lch/catalogue/getCatalogue", { params });
};

export const addCategory = params => {
  return Axios.post("/lch/category/addCategory", { params });
};
