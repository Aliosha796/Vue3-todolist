import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 对应github项目名称
  base: "/",
  build: {
    outDir: "docs",
  },
});
