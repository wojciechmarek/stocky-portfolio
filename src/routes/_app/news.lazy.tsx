import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/news" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">Hello from News!</div>
    </div>
  );
}
