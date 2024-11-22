import { Button } from "@material-tailwind/react";
import { Bell, Search } from "lucide-react";

export const CommonHeader = () => {
  return (
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
  );
};
