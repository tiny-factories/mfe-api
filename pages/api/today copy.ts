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
  // make new array

  //get today
  // get last year
  //get data from ten years ago
  // push to array

  const { searchString } = req.query;
  console.log("Searching for" + searchString);
  const allUsers = await prisma.data.findMany({
    where: {
      matterSlug: "n2o",
    },
  });
  const newArray = allUsers
    .sort((a, b) => b.measuredAt - a.measuredAt)
    .map((item) => ({
      [item.measuredAt]: [item.measurement],
    }));
  // sort aray by date

  // save iteam 0,1,9
  // console.log(newArray);
  const t3Array = [];

  t3Array.push(newArray[0]);
  t3Array.push(newArray[1]);
  t3Array.push(newArray[9]);

  res.json(t3Array);
}
