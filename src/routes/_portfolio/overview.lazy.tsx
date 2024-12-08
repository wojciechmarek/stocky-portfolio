import { createLazyFileRoute } from "@tanstack/react-router";
import { QuickStatisticTile } from "../../components/molecules";
import { useState } from "react";
import { OverviewHeader } from "../../components/organisms/headers/overview-header/OverviewHeader";
import { SummaryJumbotron } from "../../components/organisms/overview/summary-jumbotron/SummaryJumbotron";
import { PortfoliosDrawer } from "../../components/organisms";

export const Route = createLazyFileRoute("/overview" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const [isPortfolioDrawerOpened, setIsPortfolioDrawerOpened] = useState(false);

  const details = [
    {
      name: "Open positions",
      value: "$23,234",
      change: "+$1,231",
      chartColor: "#2563eb",
    },
    {
      name: "Open profit",
      value: "$1,233",
      change: "+$12",
      chartColor: "#2563eb",
    },
    {
      name: "Free cash",
      value: "$400",
      change: "$0",
      chartColor: "#16a34a",
    },
    {
      name: "XIRR",
      value: "9.34%",
      change: "-$0.23%",
      chartColor: "#09090b",
    },
    {
      name: "Drawndown",
      value: "9.34%",
      change: "-$0.23%",
      chartColor: "#09090b",
    },
  ];
  return (
    <>
      <>
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
      </>

      <PortfoliosDrawer
        isOpen={isPortfolioDrawerOpened}
        onCloseClick={() => setIsPortfolioDrawerOpened(false)}
      />
    </>
  );
}

// const Msg = () => (
//   <div className="flex flex-row gap-4">
//     <div className="flex justify-center items-center w-12">
//       {/* <img src={checkIcon} className="w-10" alt="" /> */}
//     </div>
//     <div className="">
//       <h2 className="text-2xl text-[#ffffffde] font-bold">Well done!</h2>
//       <p className="text-[#ffffffde] text-sm">
//         The order was send successfully to the system.
//       </p>
//     </div>
//   </div>
// );
