import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useApi } from "../../api";
import { Models } from "appwrite";
import { UserJumbotron } from "../../components/organisms/profile";
import {
  ButtonType,
  SettingsButtonsSection,
} from "../../components/molecules/profile";
import { AppearanceDrawer } from "../../components/organisms/profile/appearance-drawer/AppearanceDrawer";
import { CreditCard, Languages, LogOut, Moon, X } from "lucide-react";

export const Route = createLazyFileRoute("/_profile/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { account, avatars } = useApi();

  const initialsUrl = avatars.getInitials("Wo Ma");

  const [user, setUser] = useState<Models.User<Models.Preferences>>();

  const [isAppearanceDrawerOpened, setIsAppearanceDrawerOpened] =
    useState(false);

  const handleLogOutButtonClick = async () => {
    await account.deleteSession("current");
    navigate({ to: "/login" });
  };

  useEffect(() => {
    const getAccount = async () => {
      const data = await account.get();
      console.log("===account===>", data);

      setUser(data);
    };

    getAccount();
  }, [account]);

  const overallSettingButtons: ButtonType[] = [
    {
      id: "theme",
      icon: <Moon />,
      color: "bg-[#020202]",
      name: "Appearance",
      description: "Change the app theme and language",
    },
    {
      id: "subs",
      icon: <CreditCard />,
      color: "bg-green-500",
      name: "Subscription",
      description: "Change the app theme",
    },
    {
      id: "lang",
      icon: <Languages />,
      color: "bg-blue-500",
      name: "Language",
      description: "Change the app theme",
    },
  ];

  const sessionSettingButtons: ButtonType[] = [
    {
      id: "logoff",
      icon: <LogOut />,
      color: "bg-[#ff8800]",
      name: "Log off",
      description: "End the session",
    },
    {
      id: "delete",
      icon: <X />,
      color: "bg-[#ff0000]",
      name: "Delete account",
      description: "Remove account and all subscriptions",
    },
  ];

  return (
    <>
      <UserJumbotron
        userDetails={{
          email: user?.email,
          profileUrl: initialsUrl,
        }}
      />

      <div className="flex flex-col mt-6 gap-4">
        <SettingsButtonsSection
          title="Overall"
          buttons={overallSettingButtons}
          handleInSettingButtonClick={() => setIsAppearanceDrawerOpened(true)}
        />
        <SettingsButtonsSection
          title="Account"
          buttons={sessionSettingButtons}
          handleInSettingButtonClick={() => handleLogOutButtonClick()}
        />
      </div>

      <AppearanceDrawer
        isOpen={isAppearanceDrawerOpened}
        onCloseClick={() => setIsAppearanceDrawerOpened(false)}
      />
    </>
  );
}
