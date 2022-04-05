import request from "@/utils/request";
/**
 * 封装登录
 *
 */
export const login = (data) => {
  return request({
    url: "/api/sys/login",
    method: "POST",
    data,
  });
};
