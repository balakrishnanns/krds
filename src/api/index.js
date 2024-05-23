import axios from "axios";
import { endPoints } from "./api";

export const getProductList = () => {
    let request = axios({
      method: "get",
      url: endPoints.GET_PRODUCT_LIST,
    });
    return request;
  };