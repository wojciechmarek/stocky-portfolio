import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/more" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello from More!</div>;
}
