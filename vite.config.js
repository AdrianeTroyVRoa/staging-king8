import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import htmlInject from "vite-plugin-html-inject";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  root: "src/pages/login/",
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
      ],
    }),
  ],
  build: {
    rollupOptions: {
      //target: "esnext",
      emptyOutDir: true,
      input: {
        home: resolve(__dirname, "src/pages/home/index.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
  /*
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        index: "index.html",
        login: "login.html",
      },
    },
  },
*/
});
