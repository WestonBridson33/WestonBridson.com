import Vue from "vue";
import Vuex from "vuex";
import * as mutations from "./mutations.js";
import * as getters from "./getters.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    scrollPosY: 0,
    scrollHeight: 0,
  },
  getters,
  mutations,
});

