import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "./presets/lara";
import "./style.css";

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});

app.mount("#app");
