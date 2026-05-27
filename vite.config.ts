import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/my_website/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});