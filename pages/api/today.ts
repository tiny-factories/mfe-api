import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

// export default function handler(
//   _req: NextApiRequest,
//   res: NextApiResponse<[]>
// ) {
//   return res.status(200).json("Hello");
// }

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchString } = req.query;
  // console.log("Searching for" + searchString);

  // Get Data for CH₄
  const allCh4 = await prisma.data.findMany({
    where: {
      matterSlug: "ch4",
    },
  });
  const allCh4Data = allCh4
    .sort((a, b) => b.measuredAt - a.measuredAt)
    .map((item) => ({
      measurement: [item.measurement],
    }));

  // Get Data for CO₂
  const allCo2 = await prisma.data.findMany({
    where: {
      matterSlug: "co2",
    },
  });
  const allCo2Data = allCo2
    .sort((a, b) => b.measuredAt - a.measuredAt)
    .map((item) => ({
      measurement: [item.measurement],
    }));

  // Get Data for N₂O
  const allN2o = await prisma.data.findMany({
    where: {
      matterSlug: "n2o",
    },
  });
  const allN2oData = allN2o
    .sort((a, b) => b.measuredAt - a.measuredAt)
    .map((item) => ({
      measurement: [item.measurement],
    }));

  // Get Data for SF₆
  const allsf6 = await prisma.data.findMany({
    where: {
      matterSlug: "sf6",
    },
  });

  const allSf6Data = allsf6
    .sort((a, b) => b.measuredAt - a.measuredAt)
    .map((item) => ({
      measurement: [item.measurement],
    }));
  console.log(allSf6Data[0]);

  const todayData = [];

  todayData.push({ ch4: allCh4Data[0] });
  todayData.push({ co2: allCo2Data[0] });
  todayData.push({ n2o: allN2oData[0] });
  todayData.push({ sf6: allSf6Data[0] });

  res.json(todayData);
}
