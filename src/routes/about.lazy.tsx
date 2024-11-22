import { createLazyFileRoute } from "@tanstack/react-router";
import { CommonHeader } from "../components/molecules";

export const Route = createLazyFileRoute("/about" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <CommonHeader />
      Hello from About!
    </div>
  );
}
