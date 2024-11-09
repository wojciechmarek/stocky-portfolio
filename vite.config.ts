import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    VitePWA({
      includeAssets: ["favicon.ico", "vite.svg"],
      manifest: {
        name: "Stocky",
        short_name: "Stocky",
        description: "The personal investments portfolio manager",
        theme_color: "#141a21",
        background_color: "141a21",
        icons: [
          {
            src: "stocky.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
