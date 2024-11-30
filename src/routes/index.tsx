import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  navigate({ to: "/overview" });

  return null;
}
