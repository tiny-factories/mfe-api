import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "CO₂",
    color: "hsl(70, 70%, 50%)",
    data: [
      {
        x: "2020",
        y: 300,
      },
      {
        x: "2019",
        y: 290,
      },
      {
        x: "2018",
        y: 270,
      },
      {
        x: "2017",
        y: 300,
      },
      {
        x: "2016",
        y: 240,
      },
    ],
  },
];

const MyResponsiveLine = ({ data, result, filter }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "date",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Atmospheric CO₂ in PPM",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default function App() {
  return (
    <div className="h-96 w-96">
      <MyResponsiveLine data={data} />
    </div>
  );
}
