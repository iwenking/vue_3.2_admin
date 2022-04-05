import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
//响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    //需要判断当前请求是否成功
    if (success) {
      return data;
    } else {
      ElMessage.error(message);
      return Peromise.reject(new Error(message));
    }
  },
  (error) => {
    ElMessage.error(error.message);
    return Peromise.reject(new Error(error));
  }
);

export default service;
