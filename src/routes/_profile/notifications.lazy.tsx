import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_profile/notifications")({
  component: RouteComponent,
});

function RouteComponent() {
  return <>Hello from Notifications!</>;
}
