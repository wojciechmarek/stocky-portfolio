import { createLazyFileRoute } from "@tanstack/react-router";
import { StandardHeader } from "../../components/organisms";

export const Route = createLazyFileRoute("/transactions" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <StandardHeader title="Transactions" />
      Hello from Transactions!
    </div>
  );
}
