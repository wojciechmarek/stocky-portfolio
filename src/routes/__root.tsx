import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Flip, ToastContainer } from "react-toastify";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastContainer transition={Flip} />
      <main className="flex flex-col h-screen bg-background-color text-font-color">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
