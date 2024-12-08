import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useApi } from "../../api";
import { Models } from "appwrite";
import { UserJumbotron } from "../../components/organisms/profile";
import { SettingsButtonsSection } from "../../components/molecules/profile";
import { StandardButton } from "../../components/atoms";
import { AppearanceDrawer } from "../../components/organisms/profile/appearance-drawer/AppearanceDrawer";

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

  return (
    <>
      <UserJumbotron
        userDetails={{
          email: user?.email,
          profileUrl: initialsUrl,
        }}
      />

      <div className="mx-3 flex flex-col mt-6 gap-2">
        <SettingsButtonsSection
          title="Overall"
          handleInSettingButtonClick={() => setIsAppearanceDrawerOpened(true)}
        />
        <StandardButton className="mt-6" onClick={handleLogOutButtonClick}>
          Log Out
        </StandardButton>
      </div>

      <AppearanceDrawer
        isOpen={isAppearanceDrawerOpened}
        onCloseClick={() => setIsAppearanceDrawerOpened(false)}
      />
    </>
  );
}
