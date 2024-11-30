import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  Button,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  CommonHeader,
  MobileBottomNavigation,
} from "../../components/molecules";

export const Route = createLazyFileRoute("/overview" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = useState(1);

  const stats = [
    {
      name: "Total balance",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Opened assets",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Unrealized profit",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "XIRR",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Unrealized profit",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "XIRR",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Unrealized profit",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "XIRR",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Unrealized profit",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "XIRR",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Unrealized profit",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "XIRR",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "Unrealized profit",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
    {
      name: "XIRR",
      amount: "$23,234",
      profit: "$23,234",
      percentageProfit: 21,
    },
  ];

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col h-full">
      <CommonHeader />
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col bg-secondary-bg-color rounded-2xl mx-3 mt-3 p-3">
          <span className="text-dimmed-font-color">Total net worth</span>
          <Typography variant="h2" className="mt-1">
            723 123 PLN
          </Typography>
        </div>

        <div className="grid mt-6 grid-cols-2 gap-2 mx-3">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-row bg-secondary-bg-color h-24 rounded-2xl py-2 px-3"
            >
              <div className="flex flex-col justify-between">
                <h2 className="text-sm text-gray-600">{stat.name}</h2>
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
          ))}
        </div>

        <Accordion open={open === 1} className="px-3">
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
        </Button>
      </div>
      <MobileBottomNavigation />
    </div>
  );
}

const Msg = () => (
  <div className="flex flex-row gap-4">
    <div className="flex justify-center items-center w-12">
      {/* <img src={checkIcon} className="w-10" alt="" /> */}
    </div>
    <div className="">
      <h2 className="text-2xl text-[#ffffffde] font-bold">Well done!</h2>
      <p className="text-[#ffffffde] text-sm">
        The order was send successfully to the system.
      </p>
    </div>
  </div>
);
