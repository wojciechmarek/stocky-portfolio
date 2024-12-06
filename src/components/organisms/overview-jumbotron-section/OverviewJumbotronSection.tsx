import { Typography } from "@material-tailwind/react";
import { ArrowLeftRight, ChartArea, List, PlusCircle } from "lucide-react";
import { OverviewSummaryButton } from "../../atoms";
import { useNavigate } from "@tanstack/react-router";

export type SummaryButtonType = "details" | "assets" | "transactions" | "add";

export type OverviewJumbotronSectionProps = {};

export const OverviewJumbotronSection = (
  props: OverviewJumbotronSectionProps
) => {
  const {} = props;

  const overviewButtons = [
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

  const navigate = useNavigate();

  const handleOnSummaryButtonClick = (buttonType: SummaryButtonType) => {
    switch (buttonType) {
      case "details":
        navigate({ to: "/details" });
        break;

      case "assets":
        navigate({ to: "/assets" });
        break;

      case "transactions":
        navigate({ to: "/transactions" });
        break;

      case "add":
        navigate({ to: "/transactions" });
        break;
    }
  };

  return (
    <div className="flex flex-col mx-3 p-3 items-center">
      <Typography variant="paragraph" className="text-dimmed-font-color">
        Total balance
      </Typography>
      <Typography variant="h1" className="mt-1">
        $122,231
      </Typography>
      <Typography variant="paragraph" className="text-dimmed-font-color">
        24h change: +2,3% (+$123)
      </Typography>
      <Typography variant="paragraph" className="text-dimmed-font-color">
        Mon, 15th of Jan at 02:12 AM CET
      </Typography>
      <div className="flex flex-row mt-6 gap-3">
        {overviewButtons.map((button) => (
          <OverviewSummaryButton
            {...button}
            onClick={() => handleOnSummaryButtonClick(button.type as never)}
          />
        ))}
      </div>
    </div>
  );
};
