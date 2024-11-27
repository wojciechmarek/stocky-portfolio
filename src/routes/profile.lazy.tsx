import { Button, Drawer, Typography } from "@material-tailwind/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { CreditCard, Languages, Moon, X } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const settings = [
    {
      icon: <Moon />,
      color: "bg-gray-700",
      name: "Theme",
      description: "Change the app theme",
    },
    {
      icon: <CreditCard />,
      color: "bg-green-500",
      name: "Subscription",
      description: "Change the app theme",
    },
    {
      icon: <Languages />,
      color: "bg-blue-500",
      name: "Language",
      description: "Change the app theme",
    },
  ];

  const colors = [
    "bg-[#5743f4]",
    "bg-[#548efb]",
    "bg-[#519eba]",
    "bg-[#11bc95]",
    "bg-[#02ba63]",
    "bg-[#e4a32f]",
    "bg-[#e74b1f]",
    "bg-[#df2684]",
    "bg-[#db00e6]",
    "bg-[#9400e8]",
    "bg-[#6d00e7]",
  ];

  const [openBottom, setOpenBottom] = useState(false);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  const handleInSettingButtonClick = () => {
    openDrawerBottom();
  };

  return (
    <>
      <div className="mx-3">
        <div className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col justify-start w-3/5">
            <h3 className="text-4xl font-bold">Johnantan Doe Theodore</h3>
            <span className="bg-blue-600 rounded-lg px-4">Basic plan</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-full h-24 w-24 bg-red-300" />
          </div>
        </div>
      </div>
      <div className="mx-3 flex flex-col mt-12 gap-2">
        {settings.map((setting) => (
          <Button
            onClick={handleInSettingButtonClick}
            className="bg-[#121413] flex flex-row rounded-lg px-4 py-1 normal-case items-center"
            key={setting.name}
          >
            <div className="">
              <div
                className={`w-10 h-10 ${setting.color} rounded-full flex justify-center items-center`}
              >
                {setting.icon}
              </div>
            </div>
            <div className="flex flex-col py-2 text-left ml-4">
              <p className="text-lg">{setting.name}</p>
              <p className="text-xs text-gray-400">{setting.description}</p>
            </div>
          </Button>
        ))}
      </div>

      <Drawer
        placement="bottom"
        size={550}
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 bg-[#121413] rounded-tl-3xl rounded-tr-3xl"
      >
        <div className="mb-4 flex items-center justify-between ">
          <Typography variant="h3">Theme</Typography>
          <X onClick={closeDrawerBottom} />
        </div>
        <Typography className="mb-2 pr-4 font-normal">
          Select a default theme
        </Typography>
        <div className="flex flex-row gap-2">
          <Button className="p-1">
            <div className="w-20 h-16 bg-gradient-to-br from-gray-400 via-gray-50 to-gray-400 rounded-md" />
          </Button>
          <Button className="p-1">
            <div className="w-20 h-16 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 rounded-md" />
          </Button>
          <Button className="p-1">
            <div className="w-20 h-16 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-900 rounded-md" />
          </Button>
        </div>

        <Typography className="mb-2 mt-4 pr-4 font-normal">
          Pick an accent color
        </Typography>
        <div className="flex flex-row gap-1 flex-wrap">
          {colors.map((color) => (
            <Button className="p-1 rounded-full" key={color}>
              <div className={`w-8 h-8 rounded-full ${color}`} />
            </Button>
          ))}
        </div>
      </Drawer>
    </>
  );
}
