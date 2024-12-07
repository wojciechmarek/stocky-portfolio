import { Typography } from "@material-tailwind/react";

export const TotalMoneySection = () => {
  return (
    <div className="flex flex-col mx-3 p-3 items-center">
      <Typography
        variant="paragraph"
        className="text-dimmed-font-color text-base"
      >
        Total balance
      </Typography>
      <Typography variant="paragraph" className="mt-1 text-5xl font-bold">
        $122,231
      </Typography>
      <Typography
        variant="paragraph"
        className="mt-2 text-dimmed-font-color text-sm"
      >
        24h change: +2,3% (+$123)
      </Typography>
      <Typography
        variant="paragraph"
        className="text-dimmed-font-color text-sm"
      >
        Mon, 15th of Jan at 02:12 AM CET
      </Typography>
    </div>
  );
};
