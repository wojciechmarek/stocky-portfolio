import { createLazyFileRoute } from "@tanstack/react-router";
import { TitledHeader } from "../../components/molecules";

export const Route = createLazyFileRoute("/search" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <TitledHeader title="Search" />
      Hello from Search!
    </div>
  );
}
