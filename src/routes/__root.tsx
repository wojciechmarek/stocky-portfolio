import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Flip, ToastContainer } from "react-toastify";

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastContainer transition={Flip} />
      <main className="h-dvh bg-primary-bg-color text-primary-font-color">
        <Outlet />
      </main>
    </>
  ),
});
