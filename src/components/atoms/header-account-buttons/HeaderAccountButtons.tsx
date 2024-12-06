import { Button } from "@material-tailwind/react";
import { Bell, Search } from "lucide-react";

export type AccountButtonType = "search" | "notification" | "profile";

export type HeaderAccountButtonsProps = {
  onButtonClick: (type: AccountButtonType) => void;
};

export const HeaderAccountButtons = (props: HeaderAccountButtonsProps) => {
  const { onButtonClick } = props;

  return (
    <div className="flex flex-row items-center">
      <Button
        className="bg-transparent p-3"
        onClick={() => onButtonClick("search")}
      >
        <div className="h-6 w-6">
          <Search />
        </div>
      </Button>
      <Button
        className="bg-transparent p-3"
        onClick={() => onButtonClick("notification")}
      >
        <div className="h-6 w-6">
          <Bell />
        </div>
      </Button>
      <Button
        className="bg-transparent p-2"
        onClick={() => onButtonClick("profile")}
      >
        <div className="h-8 w-8 rounded-full">
          <img
            src="https://api.dicebear.com/9.x/thumbs/svg?scale=75&seed=Wojtek"
            alt="profile"
            className="rounded-full"
          />
        </div>
      </Button>
    </div>
  );
};
