import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/settings" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="flex flex-col h-full">Hello from Settings!</div>;
}
