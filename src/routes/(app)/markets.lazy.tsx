import { createLazyFileRoute } from "@tanstack/react-router";
import { StandardHeader } from "../../components/organisms/headers";
import { MobileNavigationBar } from "../../components/organisms";

export const Route = createLazyFileRoute("/markets" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <StandardHeader title="Markets" isBackButtonVisible={false} />
      <div className="flex-grow">Hello from Markets!</div>
      <MobileNavigationBar />
    </div>
  );
}
