import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/search" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return <>Hello from Search!</>;
}
