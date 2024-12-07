import { createLazyFileRoute } from "@tanstack/react-router";
import { StandardHeader } from "../../components/organisms/headers";

export const Route = createLazyFileRoute("/(profile)/notifications")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <StandardHeader title="Notifications" />
      Hello from Notifications!
    </div>
  );
}
