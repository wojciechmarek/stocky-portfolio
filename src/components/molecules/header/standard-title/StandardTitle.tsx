import { ChevronLeft } from "lucide-react";
import { HeaderTitle, TransparentButton } from "../../../atoms";
import { Link } from "@tanstack/react-router";

export type StandardTitleProps = {
  value: string;
  isBackButtonVisible: boolean;
};

export const StandardTitle = (props: StandardTitleProps) => {
  const { value, isBackButtonVisible } = props;
  return (
    <div className="p-2 flex flex-row items-center gap-3">
      {isBackButtonVisible && (
        <Link to={".."}>
          <TransparentButton className="p-0 flex flex-row items-center">
            <ChevronLeft />
          </TransparentButton>
        </Link>
      )}
      <HeaderTitle value={value} />
    </div>
  );
};
