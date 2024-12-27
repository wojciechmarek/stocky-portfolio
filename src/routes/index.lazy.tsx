import { createLazyFileRoute } from "@tanstack/react-router";
import { OverviewHeader } from "../components/organisms/headers/overview-header/OverviewHeader";
import {
  MobileNavigationBar,
  PortfoliosDrawer,
  SummaryJumbotron,
} from "../components/organisms";
import { QuickStatisticTile } from "../components/molecules";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isPortfolioDrawerOpened, setIsPortfolioDrawerOpened] = useState(false);

  const details = [
    {
      name: "Open positions",
      value: "$23,234",
      change: "+$1,231",
      chartColor: "#1fbd95",
    },
    {
      name: "Open profit",
      value: "$1,233",
      change: "+$12",
      chartColor: "#e77278",
    },
    {
      name: "Free cash",
      value: "$400",
      change: "$0",
      chartColor: "#f0c441",
    },
    {
      name: "XIRR",
      value: "9.34%",
      change: "-$0.23%",
      chartColor: "#786e93",
    },
    {
      name: "Drawndown",
      value: "9.34%",
      change: "-$0.23%",
      chartColor: "#cdd6dd",
    },
  ];
  return (
    <main className="bg-primary-bg-color text-primary-font-color flex flex-col h-dvh">
      <OverviewHeader
        onSelectorButtonClick={() => setIsPortfolioDrawerOpened(true)}
      />
      <div className="overflow-y-auto flex-grow">
        <SummaryJumbotron className="mt-3" />
        <div className="grid mt-6 mb-3 grid-cols-2 gap-2 mx-3">
          {details.map((detail) => (
            <QuickStatisticTile {...detail} />
          ))}
        </div>
      </div>

      <MobileNavigationBar />

      <PortfoliosDrawer
        isOpen={isPortfolioDrawerOpened}
        onCloseClick={() => setIsPortfolioDrawerOpened(false)}
      />
    </main>
  );
}
