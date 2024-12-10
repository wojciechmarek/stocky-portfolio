import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/more" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">Hello from More!</div>
    </div>
  );
}
