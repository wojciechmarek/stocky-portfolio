import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

export type StandardButtonProps = {
  children: ReactNode;
  className: string;
  [key: string]: unknown;
};

export const StandardButton = (props: StandardButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <Button
      className={`bg-secondary-bg-color text-primary-font-color shadow-none normal-case ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};
