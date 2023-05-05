import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: ["/src/components"],
      service: ["/src/service"],
      routes: ["/src/routes"],
      config: ["/src/config"],
      utils: ["/src/utils"],
    },
  },
});
