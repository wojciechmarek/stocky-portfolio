import { createFileRoute } from "@tanstack/react-router";
import {
  CommonHeader,
  MobileBottomNavigation,
} from "../../components/molecules";

export const Route = createFileRoute("/(app)/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex-1">
        <CommonHeader />
        <div className="mt-6"></div>
      </div>
      <MobileBottomNavigation />
    </>
  );
}
