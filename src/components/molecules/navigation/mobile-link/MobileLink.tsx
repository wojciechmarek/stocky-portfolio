import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { TransparentButton } from "../../../atoms";
import { Typography } from "@material-tailwind/react";

export type MobileLinkProps = {
  label: string;
  to: string;
  icon: ReactNode;
};

export const MobileLink = (props: MobileLinkProps) => {
  const { label, to, icon } = props;

  return (
    <Link to={to as never} className="group [&.active]:font-bold">
      <TransparentButton
        className="bg-transparent group-[&.active]:bg-primary-bg-color
         rounded-full flex items-center normal-case"
      >
        <div className="h-6 w-6 flex">{icon}</div>
        <Typography className="text-sm font-bold ml-3 hidden group-[&.active]:block">
          {label}
        </Typography>
      </TransparentButton>
    </Link>
  );
};
