import { createApp } from "vue";
import App from "./app/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./app/router";
import "./app/styles/index.scss";
import store, { key } from "@/app/store";

const app = createApp(App);

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(store, key);

app.mount("#app");
