import { Button } from "@material-tailwind/react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const CommonBackButton = () => {
  return (
    <div className="flex flex-row mx-3 mt-6 items-center justify-between">
      <Link to={"/overview"}>
        <Button className="bg-transparent p-3 flex flex-row items-center">
          <div className="h-6 w-6">
            <ChevronLeft />
          </div>
          <span className="ml-2">Back</span>
        </Button>
      </Link>
    </div>
  );
};
