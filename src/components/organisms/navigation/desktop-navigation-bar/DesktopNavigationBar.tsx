import {
  ChartCandlestick,
  Ellipsis,
  Menu,
  Newspaper,
  Wallet,
} from "lucide-react";
import { DesktopLink } from "../../../molecules";
import { Typography } from "@material-tailwind/react";
import { Link } from "@tanstack/react-router";
import { TransparentButton } from "../../../atoms";

export const DesktopNavigationBar = () => {
  const links = [
    { label: "Overview", to: "/", icon: <Wallet /> },
    { label: "Markets", to: "/markets", icon: <ChartCandlestick /> },
    { label: "News", to: "/news", icon: <Newspaper /> },
    { label: "More", to: "/more", icon: <Ellipsis /> },
  ];
  return (
    <div className="bg-secondary-bg-color h-full w-60 flex-col hidden md:flex">
      <div className="p-2 pt-4 flex content-center justify-between items-center h-16">
        <Link to="/" className="ml-3">
          <Typography variant="h1" className="text-3xl">
            Stocky
          </Typography>
        </Link>
        <TransparentButton className="p-3">
          <div className="h-6 w-6">
            <Menu />
          </div>
        </TransparentButton>
      </div>
      <div className="p-2 flex flex-col gap-2">
        {links.map((link) => (
          <DesktopLink {...link} key={link.label} />
        ))}
      </div>
    </div>
  );
};
