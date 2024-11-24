import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { CreditCard, Languages, Moon } from "lucide-react";
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
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerBottom}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </>
  );
}
