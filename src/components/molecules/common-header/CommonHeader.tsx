import { Button } from "@material-tailwind/react";
import { useNavigate } from "@tanstack/react-router";
import { Bell, Search } from "lucide-react";

export const CommonHeader = () => {
  const navigate = useNavigate();

  const handleOnNotificationButtonClick = async () => {
    await navigate({ to: "/notifications" });
  };

  const handleOnProfileButtonClick = async () => {
    await navigate({ to: "/settings" });
  };

  return (
    <div className="flex flex-row mx-3 mt-6 mb-3 items-center justify-between">
      <h1 className="font-bold text-3xl">Overview</h1>
      <div className="flex flex-row gap-1 items-center">
        <Button className="bg-transparent p-3 ">
          <div className="h-6 w-6">
            <Search />
          </div>
        </Button>
        <Button
          className="bg-transparent p-3"
          onClick={handleOnNotificationButtonClick}
        >
          <div className="h-6 w-6">
            <Bell />
          </div>
        </Button>
        <Button
          className="bg-transparent p-2"
          onClick={handleOnProfileButtonClick}
        >
          <div className="h-8 w-8 bg-red-300 rounded-full"></div>
        </Button>
      </div>
    </div>
  );
};
