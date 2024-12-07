import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { ApiContext } from "./api/api.context";
import { account, avatars } from "./api/api.provider";
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ApiContext.Provider value={{ account, avatars }}>
        <RouterProvider router={router} />
      </ApiContext.Provider>
    </ThemeProvider>
  </StrictMode>
);
