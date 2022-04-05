import { login } from "@/api/sys";
import { setItem, getItem } from "@/utils/storage";
import md5 from "md5";
import router from "@/router";
export default {
  namespaced: true,
  state: () => ({
    token: getItem("token") || "",
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem("token", token);
    },
  },
  actions: {
    login(context, userinfo) {
      const { username, password } = userinfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            this.commit("user/setToken", data.token);
            router.push("/");
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
