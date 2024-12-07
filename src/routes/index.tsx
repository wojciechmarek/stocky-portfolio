import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useApi } from "../api";

export const Route = createFileRoute("/" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { account } = useApi();

  if (account) {
    navigate({ to: "/overview" });
  }

  navigate({ to: "/login" });

  return null;
}
