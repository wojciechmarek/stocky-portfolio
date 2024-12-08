import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-primary-bg-color text-primary-font-color flex flex-col h-dvh">
      <Outlet />
    </main>
  );
}
