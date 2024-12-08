import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/transactions" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="flex flex-col h-full">Hello from Transactions!</div>;
}
