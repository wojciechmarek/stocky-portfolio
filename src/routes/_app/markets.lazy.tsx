import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/markets" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">Hello from Markets!</div>
    </div>
  );
}
