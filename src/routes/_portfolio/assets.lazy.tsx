import { createLazyFileRoute } from "@tanstack/react-router";
import { TabsWithList } from "../../components/organisms/assets";

export const Route = createLazyFileRoute("/assets" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <div className="mt-3" />
      <TabsWithList />
    </div>
  );
}
