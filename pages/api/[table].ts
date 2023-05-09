import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET /api/test?searchString=:searchString
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { table, searchString, currentPage, pageSize } = req.query;

  const tableCount = await prisma[table].count({
    where: { published: true },
  });

  const tableData = await prisma[table].findMany({
    skip: (+currentPage - 1) * +pageSize,
    take: +pageSize,
    where: { published: true },
  });

  // console.log("Total published posts:", tableCount);
  // console.log("Current page posts:", tableData);
  const response = {
    tableCount: tableCount,
    tableData: tableData,
  };
  res.json(response);
}
