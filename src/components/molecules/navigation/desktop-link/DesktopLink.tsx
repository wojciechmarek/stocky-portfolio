import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { TransparentButton } from "../../../atoms";
import { Typography } from "@material-tailwind/react";

export type DesktopLinkProps = {
  label: string;
  to: string;
  icon: ReactNode;
};

export const DesktopLink = (props: DesktopLinkProps) => {
  const { label, to, icon } = props;

  return (
    <Link to={to as never} className="group [&.active]:font-bold">
      <TransparentButton
        className="bg-transparent group-[&.active]:bg-primary-bg-color group-[&.active]:text-primary-font-color text-dimmed-font-color
         rounded-full flex items-center normal-case w-full"
      >
        <div className="h-5 w-5 flex">{icon}</div>
        <Typography className="text-xs font-bold mt-1">{label}</Typography>
      </TransparentButton>
    </Link>
  );
};
