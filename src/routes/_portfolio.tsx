import {
  createFileRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { StandardHeader } from "../components/organisms";

export const Route = createFileRoute("/_portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouterState();

  return (
    <main className="bg-primary-bg-color text-primary-font-color flex flex-col h-dvh">
      <StandardHeader
        title={
          router.location.pathname.charAt(1).toUpperCase() +
          router.location.pathname.slice(2)
        }
      />
      <Outlet />
    </main>
  );
}
