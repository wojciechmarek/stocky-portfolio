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
        className="px-4 py-1 h-12 bg-transparent group-[&.active]:bg-primary-bg-color group-[&.active]:text-primary-font-color text-dimmed-font-color
         rounded-xl flex items-center normal-case w-full"
      >
        <div className="w-8 flex justify-center content-center">{icon}</div>
        <Typography className="text-sm font-bold ml-2">{label}</Typography>
      </TransparentButton>
    </Link>
  );
};
