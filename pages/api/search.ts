import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET /api/filterPosts?searchString=:searchString
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchString } = req.query;
  console.log("Searching for" + searchString);
  const allUsers = await prisma.data.findMany({
    where: {
      matterSlug: "n2o",
    },
  });
  console.log(allUsers);

  res.json(allUsers);
}
