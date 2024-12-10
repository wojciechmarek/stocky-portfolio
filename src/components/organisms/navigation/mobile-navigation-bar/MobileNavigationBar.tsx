import { ChartCandlestick, Ellipsis, Newspaper, Wallet } from "lucide-react";
import { MobileLink } from "../../../molecules/navigation";

export const MobileNavigationBar = () => {
  const links = [
    { label: "Overview", to: "/", icon: <Wallet /> },
    { label: "Markets", to: "/markets", icon: <ChartCandlestick /> },
    { label: "News", to: "/news", icon: <Newspaper /> },
    { label: "More", to: "/more", icon: <Ellipsis /> },
  ];

  return (
    <div className="bg-secondary-bg-color border-t-2 border-primary-bg-color pb-3 h-16 flex items-center justify-evenly p-2 sticky bottom-0 w-full">
      {links.map((link) => (
        <MobileLink {...link} key={link.label} />
      ))}
    </div>
  );
};
