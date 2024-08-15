# Vue 3 + TypeScript + Vite + PrimeVue + Tailwind 

This template should help get you started developing with Vue 3 and TypeScript in Vite using PrimeVue.

## You can reproduce this by your self by :

### 1- Create Vue.js project with tailwind using Vite ([Source](https://tailwindcss.com/docs/guides/vite#vue))

#### Creating Vue.js app in Vite
```
npm create vite@latest my-project -- --template vue
cd my-project
```

#### Add Tailwind 
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Update ```tailwind.config.js```
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Creat new file ```./src/style.css``` and add this code 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2- Add Prime Vue Lib ([Source](https://tailwind.primevue.org/vite/))

#### Download Prime Vue
```
# Using npm
npm install primevue

# Using yarn
yarn add primevue

# Using pnpm
pnpm add primevue
```

#### Update ```main.ts```
```
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
```

#### Download persests from [Here](https://github.com/primefaces/primevue-tailwind/releases) and add it as ```./src/presets```

#### Tailwind Config
```
npm i tailwindcss-primeui
```

####  Update ```tailwind.config.js```
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
```

### Test your application :
```
npm i
npm run dev
```
