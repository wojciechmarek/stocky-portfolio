import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useApi } from "../api";
import { useEffect } from "react";

export const Route = createFileRoute("/" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { account } = useApi();

  useEffect(() => {
    const getAccount = async () => {
      const data = await account.get();

      if (data) {
        navigate({ to: "/overview" });
      }

      navigate({ to: "/login" });
    };

    getAccount();
  }, [account, navigate]);

  return null;
}
