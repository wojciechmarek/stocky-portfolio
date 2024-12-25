import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import clsx from "clsx";
import { useState } from "react";
import { AssetsByWorthList } from "../../../molecules/assets";

const data = [
  {
    label: "Best gainers",
    value: "24h",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Worth",
    value: "worth",
    desc: <AssetsByWorthList />,
  },
  {
    label: "Type",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Account",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Country",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Currency",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

export const TabsWithList = () => {
  const [activeTab, setActiveTab] = useState("worth");

  return (
    <Tabs>
      <TabsHeader
        defaultChecked={true}
        defaultValue={"worth"}
        className="rounded-none border-b border-blue-gray-400 bg-transparent p-0 overflow-x-auto scrollbar-hidden px-3 flex-grow"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-white shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className={`text-dimmed-font-color  ${clsx(activeTab === value ? "text-primary-font-color font-bold" : "")}`}
            onClick={() => setActiveTab(value)}
          >
            <p className="w-28">{label}</p>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
