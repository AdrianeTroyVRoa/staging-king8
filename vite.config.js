import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import htmlInject from "vite-plugin-html-inject";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  root: 'src/pages/home',
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    //pages(),
    htmlInject({
      files: [
        {
          injectTo: "body",
          entry: "src/pages/home/index.jsx",
          template: "src/pages/home/index.html",
          filename: "index.html",
        },
        {
          injectTo: "body",
          entry: "src/pages/login/index.jsx",
          template: "src/pages/login/index.html",
          filename: "login.html",
        },
        {
          injectTo: "body",
          entry: "src/pages/register/index.jsx",
          template: "src/pages/register/index.html",
          filename: "register.html",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/pages/home/index.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
        register: resolve(__dirname, "src/pages/register/index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});
