import { createLazyFileRoute } from "@tanstack/react-router";
import {
  MobileNavbar,
  OverviewDetailsTile,
  OverviewHeader,
} from "../../components/molecules";
import { OverviewJumbotronSection } from "../../components/organisms";
import { useState } from "react";
import { Button, Drawer, Typography } from "@material-tailwind/react";
import { X } from "lucide-react";

export const Route = createLazyFileRoute("/overview" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

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
  ];
  return (
    <div className="flex flex-col h-full">
      <OverviewHeader onPortfolioButtonClick={openDrawerBottom} />
      <div className="flex-1 overflow-y-auto">
        <div className="mt-3">
          <OverviewJumbotronSection />
        </div>

        <div className="grid mt-6 mb-3 grid-cols-2 gap-2 mx-3">
          {details.map((detail) => (
            <OverviewDetailsTile {...detail} />
          ))}
        </div>

        {/* <Accordion open={open === 1} className="px-3">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-inherit hover:text-inherit border-0 p-0 mt-6"
          >
            Money
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row bg-secondary-bg-color h-24 rounded-2xl py-2 px-3">
                <div className="flex flex-col justify-between">
                  <h2 className="text-sm text-gray-600">Total balance</h2>
                  <div className="">
                    <h3 className="text-2xl font-bold text-[#ffffffde]">
                      $23,234
                    </h3>
                    <h3 className="inline text-sm text-gray-600">+$1,231</h3>{" "}
                    <span className="text-sm text-green-300 rounded-full bg-green-300 bg-opacity-30 py-0.5 px-2">
                      +2,1%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row bg-secondary-bg-color h-24 rounded-2xl py-2 px-3">
                <div className="flex flex-col justify-between">
                  <h2 className="text-sm text-gray-600">Unrealized profit</h2>
                  <div className="">
                    <h3 className="text-2xl font-bold text-[#ffffffde]">
                      $3,234
                    </h3>
                    <h3 className="inline text-sm text-gray-600">+$1,231</h3>{" "}
                    <span className="text-sm text-green-300 rounded-full bg-green-300 bg-opacity-30 py-0.5 px-2">
                      +2,1%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Button
          color="red"
          className="mx-3"
          onClick={() => {
            toast.error(Msg, {
              className: "rounded-none h-24 bg-[#4e8d7c]",
              icon: false,
            });
          }}
        >
          Notify!
        </Button> */}
      </div>
      <MobileNavbar />

      <Drawer
        placement="bottom"
        size={550}
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 bg-secondary-bg-color rounded-tl-3xl rounded-tr-3xl flex flex-col"
      >
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h3">Portfolio</Typography>
          <Button className="bg-transparent p-2" onClick={closeDrawerBottom}>
            <X />
          </Button>
        </div>
        <Typography className="mb-2 pr-4 font-normal">
          Select a portfolio
        </Typography>

        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div className="bg-primary-bg-color p-3 rounded-xl" key={item}>
              Portfolio {item}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
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
