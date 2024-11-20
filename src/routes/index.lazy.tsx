import { createLazyFileRoute } from "@tanstack/react-router";
import { Bell, Search } from "lucide-react";
import checkIcon from "../assets/check.svg";

import { Button } from "@material-tailwind/react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});

function Index() {
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
  ];

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="flex flex-row mx-3 mt-6 items-center justify-between">
        <h1 className="font-bold text-3xl">Overview</h1>
        <div className="flex flex-row gap-1 items-center">
          <Button className="bg-transparent p-3 ">
            <div className="h-6 w-6">
              <Search />
            </div>
          </Button>
          <Button className="bg-transparent p-3 ">
            <div className="h-6 w-6">
              <Bell />
            </div>
          </Button>
          <Button className="bg-transparent p-2 ">
            <div className="h-8 w-8 bg-red-300 rounded-full"></div>
          </Button>
        </div>
      </div>

      <div className="grid mt-6 grid-cols-2 gap-2 mx-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-row bg-[#121413] h-24 rounded-xl py-2 px-3"
          >
            <div className="flex flex-col justify-between">
              <h2 className="text-sm text-gray-600">{stat.name}</h2>
              <div className="">
                <h3 className="text-2xl font-bold text-[#ffffffde]">$23,234</h3>
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
          <div className="flex flex-row bg-[#121413] h-24 rounded-xl py-2 px-3">
            <div className="flex flex-col justify-between">
              <h2 className="text-sm text-gray-600">Total balance</h2>
              <div className="">
                <h3 className="text-2xl font-bold text-[#ffffffde]">$23,234</h3>
                <h3 className="inline text-sm text-gray-600">+$1,231</h3>{" "}
                <span className="text-sm text-green-300 rounded-full bg-green-300 bg-opacity-30 py-0.5 px-2">
                  +2,1%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row bg-[#121413] h-24 rounded-xl py-2 px-3 mt-3">
            <div className="flex flex-col justify-between">
              <h2 className="text-sm text-gray-600">Unrealized profit</h2>
              <div className="">
                <h3 className="text-2xl font-bold text-[#ffffffde]">$3,234</h3>
                <h3 className="inline text-sm text-gray-600">+$1,231</h3>{" "}
                <span className="text-sm text-green-300 rounded-full bg-green-300 bg-opacity-30 py-0.5 px-2">
                  +2,1%
                </span>
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
    </>
  );
}

const Msg = () => (
  <div className="flex flex-row gap-4">
    <div className="flex justify-center items-center w-12">
      <img src={checkIcon} className="w-10" alt="" />
    </div>
    <div className="">
      <h2 className="text-2xl text-[#ffffffde] font-bold">Well done!</h2>
      <p className="text-[#ffffffde] text-sm">
        The order was send successfully to the system.
      </p>
    </div>
  </div>
);
