import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import clsx from "clsx";

export const Route = createLazyFileRoute("/assets" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const data = [
    {
      label: "Worth",
      value: "worth",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Best gainers",
      value: "24h",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
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

  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="flex flex-col h-full">
      <Tabs>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-400 bg-transparent p-0 overflow-x-auto scrollbar-hidden"
          defaultValue={"24h"}
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
        <TabsBody className="m-3">
          {data.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
