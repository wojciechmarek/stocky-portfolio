import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/stats" as never)({
  component: About,
});

function About() {
  return <div className="p-2">Hello from Stats!</div>;
}
