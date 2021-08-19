// @ts-nocheck
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslintPlugin from "vite-plugin-eslint";
import inject from "@rollup/plugin-inject";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    // inject({
    //   exclude: ["src/**", "node_modules/**"],
    //   $: "jquery",
    //   // Select2: "select2",
    // }),
    vue(),
    vueJsx(),
    eslintPlugin(),
    visualizer({
      filename: "dist/report.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    exclude: ["jquery", "select2"],
    // exclude: ["./node_modules/jquery/dist/jquery.js", "./node_modules/select2/dist/js/select2.js"],
  },
});
