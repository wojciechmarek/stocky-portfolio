import { createLazyFileRoute } from "@tanstack/react-router";
import { StandardHeader } from "../../components/organisms/headers";

export const Route = createLazyFileRoute("/_profile/notifications")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <StandardHeader title="Notifications" />
      Hello from Notifications!
    </>
  );
}
