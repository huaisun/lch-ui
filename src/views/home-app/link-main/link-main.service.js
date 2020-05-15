import Axios from "axios";

/** 添加目录 */
export const addCatalogue = params => {
  return Axios.post("/lch/catalogue/addCatalogue", params);
};

/** 获取目录 */
export const getCatalogue = params => {
  return Axios.get("/lch/catalogue/getCatalogue", { params });
};

/** 添加分类 */
export const addCategory = params => {
  return Axios.post("/lch/category/addCategory", params);
};

/** 获取连接，通过分类id */
export const getLinkByCategoryId = params => {
  return Axios.get("/lch/link/getLinkByCategoryId", { params })
}

/** 获取个人的收藏链接 */
export const getLoveLinkByDomain = params => {
  return Axios.get("/lch/link/getLoveLinkByDomain", { params })
}
