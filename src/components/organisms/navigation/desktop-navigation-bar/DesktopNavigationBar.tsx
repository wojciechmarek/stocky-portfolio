import { ChartCandlestick, Ellipsis, Newspaper, Wallet } from "lucide-react";
import { DesktopLink } from "../../../molecules";

export const DesktopNavigationBar = () => {
  const links = [
    { label: "Overview", to: "/", icon: <Wallet /> },
    { label: "Markets", to: "/markets", icon: <ChartCandlestick /> },
    { label: "News", to: "/news", icon: <Newspaper /> },
    { label: "More", to: "/more", icon: <Ellipsis /> },
  ];
  return (
    <div className="bg-secondary-bg-color h-full w-56 flex-col p-2 hidden md:flex">
      {links.map((link) => (
        <DesktopLink {...link} key={link.label} />
      ))}
    </div>
  );
};
