import { DrawerTitle, StandardButton, TransparentButton } from "../../../atoms";
import { Drawer, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { X } from "lucide-react";
import { useState } from "react";

export type AppearanceDrawerProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

const colors = [
  "bg-[#548efb]",
  "bg-[#519eba]",
  "bg-[#11bc95]",
  "bg-[#02ba63]",
  "bg-[#e4a32f]",
  "bg-[#e74b1f]",
  "bg-[#df2684]",
  "bg-[#db00e6]",
  "bg-[#9400e8]",
  "bg-[#6d00e7]",
];

export const AppearanceDrawer = (props: AppearanceDrawerProps) => {
  const { isOpen, onCloseClick } = props;

  const [theme, setTheme] = useState("dark");

  const handleOnThemeChangeClick = (theme: string) => {
    setTheme(theme);

    if (theme === "dark") {
      document?.querySelector("body")?.setAttribute("data-theme", theme);
      return;
    }

    if (theme === "light") {
      document?.querySelector("body")?.setAttribute("data-theme", theme);
    }
  };

  return (
    <Drawer
      placement="bottom"
      size={550}
      open={isOpen}
      onClose={onCloseClick}
      className="p-4 bg-secondary-bg-color rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="flex items-center justify-between">
        <DrawerTitle value="Appearance" />
        <TransparentButton
          className="bg-transparent p-2"
          onClick={onCloseClick}
        >
          <X />
        </TransparentButton>
      </div>
      <div className="mt-3">
        <Typography>Select a default theme</Typography>
        <div className="flex flex-row gap-2">
          <StandardButton
            className={`p-1 border-2 ${clsx(theme === "light" ? "border-light-blue-600" : "border-transparent")}`}
            onClick={() => handleOnThemeChangeClick("light")}
          >
            <div className="w-20 h-16 bg-gradient-to-br from-[#ffffff] from-50% to-[#d8dce2] to-50% rounded-md border-[#d8dce2] border-2" />
            <Typography variant="paragraph">Light</Typography>
          </StandardButton>
          <StandardButton
            className={`p-1 border-2 ${clsx(theme === "dark" ? "border-light-blue-600" : "border-transparent")}`}
            onClick={() => handleOnThemeChangeClick("dark")}
          >
            <div className="w-20 h-16 bg-gradient-to-br from-[#111427] from-50% to-[#1d2848] to-50% rounded-md border-[#111427] border-2" />
            <Typography variant="paragraph">Dark</Typography>
          </StandardButton>
          <StandardButton className="p-1">
            <div className="w-20 h-16 bg-gradient-to-br from-[#111427] from-50% to-[#d8dce2] to-50% rounded-md border-[#111427] border-2" />
            <Typography variant="paragraph">System</Typography>
          </StandardButton>
        </div>
      </div>

      <div className="mt-3">
        <Typography>Pick an accent color</Typography>
        <div className="flex flex-row gap-0.5 flex-wrap">
          {colors.map((color) => (
            <StandardButton className="p-1 rounded-full" key={color}>
              <div className={`w-8 h-8 rounded-full ${color}`} />
            </StandardButton>
          ))}
        </div>
      </div>
    </Drawer>
  );
};
