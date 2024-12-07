import { Button, Drawer, Typography } from "@material-tailwind/react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useApi } from "../../api";
import { Models } from "appwrite";
import { StandardHeader } from "../../components/organisms/headers";
import { UserJumbotron } from "../../components/organisms/profile";
import { SettingsButtonsSection } from "../../components/molecules/profile";

export const Route = createLazyFileRoute("/(profile)/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { account, avatars } = useApi();

  const initialsUrl = avatars.getInitials("Wo Ma");

  const [user, setUser] = useState<Models.User<Models.Preferences>>();

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

  const handleLogOutButtonClick = async () => {
    await account.deleteSession("current");
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

  useEffect(() => {
    const getAccount = async () => {
      const data = await account.get();
      setUser(data);
    };

    getAccount();
  }, [account]);

  return (
    <div className="flex flex-col h-full">
      <StandardHeader title="Profile" />
      <UserJumbotron
        userDetails={{
          email: user?.email,
          profileUrl: initialsUrl,
        }}
      />

      <div className="mx-3 flex flex-col mt-6 gap-2">
        <SettingsButtonsSection
          title="Overall"
          handleInSettingButtonClick={handleInSettingButtonClick}
        />
      </div>

      <Button onClick={handleLogOutButtonClick}>Log Out</Button>

      <Drawer
        placement="bottom"
        size={550}
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 bg-secondary-bg-color rounded-tl-3xl rounded-tr-3xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h3">Appearance</Typography>
          <Button className="bg-transparent p-2" onClick={closeDrawerBottom}>
            <X />
          </Button>
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
