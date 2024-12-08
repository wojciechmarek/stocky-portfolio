import { useNavigate } from "@tanstack/react-router";
import {
  AccountButtonType,
  AccountManagementButtons,
  OverviewSelectorTitle,
} from "../../../molecules/header";
import { useApi } from "../../../../api";

export type OverviewHeaderProps = {
  onSelectorButtonClick: () => void;
};

export const OverviewHeader = (props: OverviewHeaderProps) => {
  const { onSelectorButtonClick } = props;

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
    <div className="flex flex-row mx-3 mt-6 mb-3 items-center justify-between sticky top-0">
      <OverviewSelectorTitle value="Overview" onClick={onSelectorButtonClick} />
      <AccountManagementButtons
        onClick={handleAccountManagementButtonClick}
        profileImageUrl={initialsImageUrl}
      />
    </div>
  );
};
