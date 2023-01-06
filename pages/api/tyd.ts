import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString
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
