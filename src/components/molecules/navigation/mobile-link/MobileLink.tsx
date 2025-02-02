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
        className="bg-transparent group-[&.active]:bg-primary-bg-color group-[&.active]:text-primary-font-color text-dimmed-font-color
         rounded-full flex items-center normal-case flex-col w-24"
      >
        <div className="h-5 w-5 flex">{icon}</div>
        <Typography className="text-xs font-bold mt-1">{label}</Typography>
      </TransparentButton>
    </Link>
  );
};
