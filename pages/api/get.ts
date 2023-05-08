import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type Data = {
  results: string[];
};

// GET /api/filterPosts?searchString=:searchString
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchString } = req.query;
  const searchData = await prisma.data.findMany({
    where: {
      title: {
        contains: searchString,
      },
    },
  });

  res.json(searchData);
}
