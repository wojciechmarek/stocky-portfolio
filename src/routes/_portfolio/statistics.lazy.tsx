import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/statistics" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2">Hello from Stats!</div>;
}
