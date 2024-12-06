import { ChartCandlestick, Ellipsis, Newspaper, Wallet } from "lucide-react";
import { MobileNavbarLink } from "../../atoms";

export const MobileNavbar = () => {
  const links = [
    { label: "Overview", to: "/overview", icon: <Wallet /> },
    { label: "Markets", to: "/markets", icon: <ChartCandlestick /> },
    { label: "News", to: "/news", icon: <Newspaper /> },
    { label: "More", to: "/more", icon: <Ellipsis /> },
  ];

  return (
    <div className="bg-secondary-bg-color border-t-2 border-primary-bg-color pb-3 h-16 flex items-center justify-evenly p-2">
      {links.map((link) => (
        <MobileNavbarLink {...link} key={link.label} />
      ))}
    </div>
  );
};
