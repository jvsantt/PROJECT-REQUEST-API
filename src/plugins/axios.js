import Vue from "vue";
import axios from "axios";

//axios.defaults.baseURL = "http://frontendapi.cm2tech.com.br";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "http://frontendapi.cm2tech.com.br"
    });
  }
});
