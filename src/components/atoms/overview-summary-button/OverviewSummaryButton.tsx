import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

export type OverviewSummaryButtonProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export const OverviewSummaryButton = (props: OverviewSummaryButtonProps) => {
  const { icon, label, onClick } = props;

  return (
    <Button
      className="bg-transparent p-2 flex flex-col items-center"
      onClick={onClick}
    >
      <div className="h-16 w-16 bg-secondary-bg-color grid rounded-full">
        <span className="place-self-center">{icon}</span>
      </div>
      <p className="mt-1 normal-case text-sm">{label}</p>
    </Button>
  );
};
