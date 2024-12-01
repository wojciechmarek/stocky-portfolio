import { Button, Drawer, Typography } from "@material-tailwind/react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { CreditCard, Languages, Moon, X } from "lucide-react";
import { useState } from "react";
import {
  CommonBackButton,
  SettingsUserDetails,
} from "../../components/molecules";
import { SettingsSettingButton } from "../../components/molecules/settings-setting-button/SettingsSettingButton";
import { SettingsButtonsSection } from "../../components/organisms";

export const Route = createLazyFileRoute("/(profile)/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

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

  const handleLogOutButtonClick = () => {
    navigate({ to: "/login" });
  };

  const handleOnThemeChangeClick = (theme: string) => {
    if (theme === "dark") {
      document?.querySelector("body")?.setAttribute("data-theme", theme);
      return;
    }

    if (theme === "light") {
      document?.querySelector("body")?.setAttribute("data-theme", theme);
    }
  };

  return (
    <div className="flex flex-col">
      <CommonBackButton />
      <SettingsUserDetails />

      <div className="mx-3 flex flex-col mt-12 gap-2">
        <SettingsButtonsSection
          buttons={settings}
          name="Overall"
          handleInSettingButtonClick={handleInSettingButtonClick}
        />

        <p className="ml-1 mt-3 text-dimmed-font-color">Account</p>
        <SettingsSettingButton
          name="Logout"
          icon={<X />}
          color="bg-red-500"
          description="End the session"
          handleInSettingButtonClick={handleLogOutButtonClick}
        />
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
          <Button
            className="p-1"
            onClick={() => handleOnThemeChangeClick("light")}
          >
            <div className="w-20 h-16 bg-gradient-to-br from-gray-400 via-gray-50 to-gray-400 rounded-md" />
          </Button>
          <Button
            className="p-1"
            onClick={() => handleOnThemeChangeClick("dark")}
          >
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
    </div>
  );
}
