import { Typography } from "@material-tailwind/react";

export type HeaderTitleProps = {
  value: string;
};

export const HeaderTitle = (props: HeaderTitleProps) => {
  const { value } = props;

  return (
    <Typography variant="h1" className="text-3xl normal-case font-bold">
      {value}
    </Typography>
  );
};
