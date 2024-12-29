import { Drawer, Typography } from "@material-tailwind/react";
import { DrawerTitle, StandardButton, TransparentButton } from "../../../atoms";
import { useMediaQuery } from "usehooks-ts";
import { X } from "lucide-react";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  onCloseClick: () => void;
};

export const PortfoliosDrawer = (props: Props) => {
  const { isOpen, onCloseClick } = props;

  const matches = useMediaQuery("(min-width: 720px)");

  return (
    <Drawer
      placement={clsx(matches ? "right" : "bottom") as never}
      size={550}
      open={isOpen}
      onClose={onCloseClick}
      className={`p-4 bg-secondary-bg-color ${clsx(matches ? "rounded-tl-3xl rounded-bl-3xl" : "rounded-tl-3xl rounded-tr-3xl")} flex flex-col`}
    >
      <div className="mb-4 flex items-center justify-between">
        <DrawerTitle value="Portfolio" />
        <TransparentButton
          className="bg-transparent p-2"
          onClick={onCloseClick}
        >
          <X />
        </TransparentButton>
      </div>
      <Typography className="mb-2 pr-4">Select a portfolio</Typography>

      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <StandardButton
            className="bg-primary-bg-color p-3 rounded-xl"
            key={item}
            onClick={onCloseClick}
          >
            <Typography variant="paragraph">Portfolio {item}</Typography>
          </StandardButton>
        ))}
      </div>
    </Drawer>
  );
};
