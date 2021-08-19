import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";

import App from "./app/App.vue";
import CommonUi from "@/components/common/common-ui";
import routes from "@/router/routes";

import "@/assets/scss/index.scss";
import "@/assets/scss/tailwind/index.css";
import "@/assets/scss/tailwind/components.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(CommonUi);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
