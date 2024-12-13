import { TransparentButton } from "../../../atoms";
import { ArrowLeftRight, ChartArea, List, PlusCircle } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Typography } from "@material-tailwind/react";

export type DetailButtonType = "details" | "assets" | "transactions" | "add";

const overviewLinks = [
  {
    label: "Details",
    icon: <ChartArea />,
    type: "details",
  },
  {
    label: "Assets",
    icon: <List />,
    type: "assets",
  },
  {
    label: "Transactions",
    icon: <ArrowLeftRight />,
    type: "transactions",
  },
  {
    label: "Add",
    icon: <PlusCircle />,
    type: "add",
  },
];

export const DetailsButtonsSection = () => {
  const navigate = useNavigate();

  const handleOnSummaryButtonClick = (buttonType: DetailButtonType) => {
    switch (buttonType) {
      case "details":
        navigate({ to: "/details" });
        break;

      case "assets":
        navigate({ to: "/assets" });
        break;

      case "transactions":
        navigate({ to: "/transactions?newTransaction=false" as never });
        break;

      case "add":
        navigate({ to: "/transactions?newTransaction=true" as never });
        break;
    }
  };

  return (
    <div className="flex flex-row mt-6 gap-1">
      {overviewLinks.map((link) => (
        <TransparentButton
          key={link.label}
          className="p-2 flex flex-col items-center"
          onClick={() => handleOnSummaryButtonClick(link.type as never)}
        >
          <div className="h-16 w-16 bg-secondary-bg-color grid rounded-full">
            <span className="place-self-center">{link.icon}</span>
          </div>
          <Typography className="mt-1 text-sm font-bold">
            {link.label}
          </Typography>
        </TransparentButton>
      ))}
    </div>
  );
};
