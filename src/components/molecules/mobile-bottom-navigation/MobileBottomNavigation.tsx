import { Button } from "@material-tailwind/react";
import { Link } from "@tanstack/react-router";
import {
  ChartCandlestick,
  Ellipsis,
  House,
  TableOfContents,
} from "lucide-react";

export const MobileBottomNavigation = () => {
  return (
    <div className="bg-[#1b1b1b] h-16 flex items-center justify-evenly p-2">
      <Link to="/overview" className="group [&.active]:font-bold">
        <Button className="bg-transparent group-[&.active]:bg-[#272727] rounded-full flex items-center normal-case">
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
      <Link to="/assets" className="group [&.active]:font-bold">
        <Button className="bg-transparent group-[&.active]:bg-[#1e201f] rounded-full flex items-center normal-case">
          <div className="h-6 w-6 flex">
            <Ellipsis />
          </div>
          <p className="ml-3 hidden group-[&.active]:block">More</p>
        </Button>
      </Link>
    </div>
  );
};
