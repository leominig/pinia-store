import { createApp } from "vue";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";
import { createPinia } from 'pinia'


// Init App
const pinia = createPinia();

createApp(App)
  .use(BoilerplatePlugin)
  .use(pinia)
  .mount("#app");
