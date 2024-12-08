import {
  createFileRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { MobileNavigationBar, StandardHeader } from "../components/organisms";

export const Route = createFileRoute("/_portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouterState();

  const isOverviewPage = router.location.pathname === "/overview";

  return (
    <main className="bg-primary-bg-color text-primary-font-color flex flex-col h-dvh">
      {!isOverviewPage && <StandardHeader title={router.location.pathname} />}
      <Outlet />
      <MobileNavigationBar />
    </main>
  );
}
