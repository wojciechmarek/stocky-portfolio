import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MobileNavigationBar, StandardHeader } from "../components/organisms";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-primary-bg-color text-primary-font-color flex flex-col h-dvh">
      <StandardHeader title="Details" />
      <Outlet />
      <MobileNavigationBar />
    </main>
  );
}
