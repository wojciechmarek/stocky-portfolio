import { Typography } from "@material-tailwind/react";
import Chart, { Props } from "react-apexcharts";

export type QuickStatTileProps = {
  name: string;
  value: string;
  change: string;
  chartColor: string;
};

export const QuickStatisticTile = (props: QuickStatTileProps) => {
  const { name, change, chartColor, value } = props;

  const chartConfig: Props = {
    type: "line" as never,
    height: 80,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        // show: ,
      },
      dataLabels: {
        // enabled: false,
        enabled: false,
      },
      colors: [chartColor],
      stroke: {
        lineCap: "round" as never,
        curve: "smooth" as never,
      },
      markers: {
        size: 0,
      },

      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: false,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
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
        <Chart {...chartConfig} />
      </div>
    </div>
  );
};
