import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(profile)/notifications")({
  component: RouteComponent,
});

function RouteComponent() {
  return <>notifications</>;
}
