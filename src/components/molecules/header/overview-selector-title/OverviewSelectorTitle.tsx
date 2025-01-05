import { HeaderTitle, TransparentButton } from "../../../atoms";
import { ChevronsUpDown } from "lucide-react";

export type OverviewSelectorTitleProps = {
  value: string;
  onClick: VoidFunction;
};

export const OverviewSelectorTitle = (props: OverviewSelectorTitleProps) => {
  const { value, onClick } = props;
  return (
    <TransparentButton
      onClick={onClick}
      className="p-2 flex flex-row items-center gap-3"
    >
      <HeaderTitle value={value} />
      <ChevronsUpDown />
    </TransparentButton>
  );
};
