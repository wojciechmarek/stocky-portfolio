import { Button } from "@material-tailwind/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { ChartCandlestick, House, TableOfContents, Wallet } from "lucide-react";
import { Flip, ToastContainer } from "react-toastify";

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastContainer transition={Flip} />

      <div className="flex flex-col h-screen">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="bg-[#121413] h-16 flex items-center justify-evenly p-2">
          <Link to="/" className="group [&.active]:font-bold">
            <Button className="bg-transparent group-[&.active]:bg-[#1e201f] rounded-full flex items-center normal-case">
              <div className="h-6 w-6 flex">
                <House />
              </div>
              <p className="ml-3 hidden group-[&.active]:block">Overview</p>
            </Button>
          </Link>
          <Link to="/assets" className="group [&.active]:font-bold">
            <Button className="bg-transparent group-[&.active]:bg-[#1e201f] rounded-full flex items-center normal-case">
              <div className="h-6 w-6 flex">
                <TableOfContents />
              </div>
              <p className="ml-3 hidden group-[&.active]:block">Assets</p>
            </Button>
          </Link>
          <Link to="/stats" className="group [&.active]:font-bold">
            <Button className="bg-transparent group-[&.active]:bg-[#1e201f] rounded-full flex items-center normal-case">
              <div className="h-6 w-6 flex">
                <ChartCandlestick />
              </div>
              <p className="ml-3 hidden group-[&.active]:block">Stats</p>
            </Button>
          </Link>
          <Link to="/wallet" className="group [&.active]:font-bold">
            <Button className="bg-transparent group-[&.active]:bg-[#1e201f] rounded-full flex items-center normal-case">
              <div className="h-6 w-6 flex">
                <Wallet />
              </div>
              <p className="ml-3 hidden group-[&.active]:block">Wallet</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  ),
});
