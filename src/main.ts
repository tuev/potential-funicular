import Vue from "vue";
import Antd, { message } from "ant-design-vue";
import App from "./App.vue";
import { VueMasonryPlugin } from "vue-masonry";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "2px",
});
Vue.use(Antd);
Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;
Vue.prototype.$message = message;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default app;
