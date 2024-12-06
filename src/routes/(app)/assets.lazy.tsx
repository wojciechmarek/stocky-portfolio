import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TitledHeader } from "../../components/molecules";

export const Route = createLazyFileRoute("/assets" as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const data = [
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
  return (
    <div className="flex flex-col h-full">
      <TitledHeader title="Assets" />
      <Tabs>
        <TabsHeader
          className="bg-secondary-bg-color mt-6 mx-3"
          indicatorProps={{
            className: "bg-[#1e201f]",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="text-primary-font-color ">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="mt-6 mx-6">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="p-0 ">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
