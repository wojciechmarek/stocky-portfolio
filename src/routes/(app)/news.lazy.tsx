import { createLazyFileRoute } from "@tanstack/react-router";
import { StandardHeader } from "../../components/organisms/headers";
import { MobileNavigationBar } from "../../components/organisms";

export const Route = createLazyFileRoute("/news" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <StandardHeader title="News" isBackButtonVisible={false} />
      <div className="flex-grow">Hello from News!</div>
      <MobileNavigationBar />
    </div>
  );
}
