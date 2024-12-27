import { Typography } from "@material-tailwind/react";
import ReactEcharts from "echarts-for-react";

export type QuickStatTileProps = {
  name: string;
  value: string;
  change: string;
  chartColor: string;
};

export const QuickStatisticTile = (props: QuickStatTileProps) => {
  const { name, change, value, chartColor } = props;

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        smooth: true,
        color: chartColor,
      },
    ],
  };

  return (
    <div
      key={name}
      className="flex flex-row bg-secondary-bg-color aspect-auto rounded-2xl py-2 px-3"
    >
      <div className="flex flex-col w-full">
        <Typography
          variant="paragraph"
          className="text-dimmed-font-color text-base"
        >
          {name}
        </Typography>
        <div className="flex flex-row items-end justify-between">
          <Typography variant="paragraph" className="text-2xl font-bold">
            {value}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-sm text-dimmed-font-color mb-1"
          >
            {change}
          </Typography>
        </div>
        <div className="flex-gro">
          <ReactEcharts option={option} />
        </div>
      </div>
    </div>
  );
};
