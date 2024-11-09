import { createLazyFileRoute } from "@tanstack/react-router";
import stockyLogo from "../assets/stocky.png";

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});

function Index() {
  return (
    <div className="flex-1 mt-10 flex flex-row items-center justify-center">
      <img src={stockyLogo} className="h-16" alt="Vite logo" />
      <h1 className="text-3xl font-bold ml-3">Stocky</h1>
    </div>
  );
}
