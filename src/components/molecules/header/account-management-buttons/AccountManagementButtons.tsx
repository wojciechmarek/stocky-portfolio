import { TransparentButton } from "../../../atoms";
import { Bell, Search } from "lucide-react";

export type AccountButtonType = "search" | "notification" | "profile";

export type AccountManagementButtonsProps = {
  profileImageUrl: string;
  onClick: (type: AccountButtonType) => void;
};

export const AccountManagementButtons = (
  props: AccountManagementButtonsProps
) => {
  const { profileImageUrl, onClick } = props;

  return (
    <div className="flex flex-row gap-1">
      <TransparentButton className="p-3" onClick={() => onClick("search")}>
        <div className="h-6 w-6">
          <Search />
        </div>
      </TransparentButton>
      <TransparentButton
        className="p-3"
        onClick={() => onClick("notification")}
      >
        <div className="h-6 w-6">
          <Bell />
        </div>
      </TransparentButton>
      <TransparentButton className="p-2" onClick={() => onClick("profile")}>
        <div className="h-8 w-8 rounded-full">
          <img src={profileImageUrl} alt="profile" className="rounded-full" />
        </div>
      </TransparentButton>
    </div>
  );
};
