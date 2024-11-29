import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Flip, ToastContainer } from "react-toastify";
import { CommonHeader, MobileBottomNavigation } from "../components/molecules";

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastContainer transition={Flip} />

      <div className="flex flex-col h-screen bg-background-color text-font-color">
        <div className="flex-1">
          <CommonHeader />
          <div className="mt-6">
            <Outlet />
          </div>
        </div>
        <MobileBottomNavigation />
      </div>
    </>
  ),
});
