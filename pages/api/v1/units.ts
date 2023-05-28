import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
// GET /api/v1/units?id=:searchString

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { unitId } = req.query;

  const result = await prisma.unit.findMany({
    where: {
      id: unitId.toString(),
      published: true,
    },
  });

  res.json(result);
}
