import { useNavigate } from "@tanstack/react-router";
import {
  AccountButtonType,
  AccountManagementButtons,
  StandardTitle,
} from "../../../molecules/header";
import { useApi } from "../../../../api";

export type StandardHeaderProps = {
  title: string;
  isBackButtonVisible?: boolean;
};

export const StandardHeader = (props: StandardHeaderProps) => {
  const { title, isBackButtonVisible = true } = props;

  const navigate = useNavigate();
  const { avatars } = useApi();

  const initialsImageUrl = avatars.getInitials("WM");

  const handleAccountManagementButtonClick = async (
    type: AccountButtonType
  ) => {
    switch (type) {
      case "search":
        await navigate({ to: "/search" });
        break;

      case "notification":
        await navigate({ to: "/notifications" });
        break;

      case "profile":
        await navigate({ to: "/profile" });
        break;
    }
  };
  return (
    <div className="flex flex-row mx-3 mt-6 mb-3 items-center justify-between">
      <StandardTitle value={title} isBackButtonVisible={isBackButtonVisible} />
      <AccountManagementButtons
        onClick={handleAccountManagementButtonClick}
        profileImageUrl={initialsImageUrl}
      />
    </div>
  );
};
