import axios from "axios";
import SystemConst from "../consts/system-const";

const create = () => {
  return axios.create({
    baseURL: SystemConst.BASE_URL,
  });
}

export default { create };