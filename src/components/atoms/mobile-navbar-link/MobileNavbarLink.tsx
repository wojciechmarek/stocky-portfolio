import { Button } from "@material-tailwind/react";
import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export type MobileNavbarLinkProps = {
  label: string;
  to: string;
  icon: ReactNode;
};

export const MobileNavbarLink = (props: MobileNavbarLinkProps) => {
  const { label, to, icon } = props;

  return (
    <Link to={to as never} className="group [&.active]:font-bold">
      <Button
        className="bg-transparent group-[&.active]:bg-primary-bg-color
         rounded-full flex items-center normal-case"
      >
        <div className="h-6 w-6 flex">{icon}</div>
        <p className="ml-3 hidden group-[&.active]:block">{label}</p>
      </Button>
    </Link>
  );
};
