import { createStore } from "vuex";
import user from "./modules/user";
import gettsrs from "./gettsrs";

export default createStore({
  gettsrs,
  modules: {
    user,
  },
});
