import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar";

const ldata = [
  {
    id: "2020",
    measurement: 120,
    measuredAt: 1,
  },
  {
    id: "2021",
    measurement: 220,
    measuredAt: 2,
  },
  {
    id: "2022",
    measurement: 330,
    measuredAt: 3,
  },
  {
    id: "2023",
    measurement: 330,
    measuredAt: 4,
  },
];

export default function BarChart({ lableXAxis, lableYAxis, key, data }) {
  return (
    <div className="h-full w-full">
      <ResponsiveBar
        data={data}
        keys={["measurement"]}
        indexBy="measuredAt"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        maxValue="auto"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "measurement in ppm",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
      />
    </div>
  );
}
