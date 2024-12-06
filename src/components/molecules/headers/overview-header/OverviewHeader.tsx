import { Button } from "@material-tailwind/react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronsUpDown } from "lucide-react";
import { AccountButtonType, HeaderAccountButtons } from "../../../atoms";

export type OverviewHeaderProps = {
  onPortfolioButtonClick: () => void;
};

export const OverviewHeader = (props: OverviewHeaderProps) => {
  const { onPortfolioButtonClick } = props;

  const navigate = useNavigate();

  const handleOnAccountButtonClick = async (type: AccountButtonType) => {
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
      <Button
        onClick={onPortfolioButtonClick}
        className="bg-transparent text-3xl font-bold normal-case p-2 relative -m-1 flex flex-row items-center"
      >
        <span>Portfolio 1</span>
        <ChevronsUpDown className="ml-3" />
      </Button>
      <HeaderAccountButtons onButtonClick={handleOnAccountButtonClick} />
    </div>
  );
};
