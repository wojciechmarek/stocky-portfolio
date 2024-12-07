import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

export type TransparentButtonProps = {
  children: ReactNode;
  className: string;
  [key: string]: unknown;
};

export const TransparentButton = (props: TransparentButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <Button
      className={`bg-transparent text-primary-font-color shadow-none normal-case ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
};
