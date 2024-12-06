import { createLazyFileRoute } from "@tanstack/react-router";
import { TitledHeader } from "../../components/molecules";

export const Route = createLazyFileRoute("/(profile)/notifications")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <TitledHeader title="Notifications" />
      Hello from Notifications!
    </div>
  );
}
