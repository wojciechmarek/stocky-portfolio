import {
  createFileRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { DesktopNavigationBar, StandardHeader } from "../components/organisms";

export const Route = createFileRoute("/_portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouterState();

  return (
    <main className="bg-primary-bg-color text-primary-font-color flex flex-col md:flex-row h-dvh">
      <DesktopNavigationBar />

      <div className="md:w-full overflow-y-auto">
        <StandardHeader
          title={
            router.location.pathname.charAt(1).toUpperCase() +
            router.location.pathname.slice(2)
          }
        />
        <div className="flex-grow mx-auto max-w-7xl">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
