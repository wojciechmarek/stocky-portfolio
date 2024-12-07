import { Typography } from "@material-tailwind/react";

export type DrawerTitleProps = {
  value: string;
};

export const DrawerTitle = (props: DrawerTitleProps) => {
  const { value } = props;

  return <Typography variant="h2">{value}</Typography>;
};
