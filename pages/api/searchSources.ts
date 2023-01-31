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
  // console.log("🔍 Searching for " + searchString);
  const searchData = await prisma.source.findMany({
    where: {
      name: {
        search: searchString,
      },
    },
  });
  // console.log("📑 Results for " + JSON.stringify(searchData);
  // console.log(searchData);

  res.json(searchData);
}
