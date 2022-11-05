import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataId = req.query.id;

  if (req.method === "DELETE") {
    handleDELETE(dataId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// DELETE /api/post/:id
async function handleDELETE(dataId, res) {
  const data = await prisma.data.delete({
    where: { id: String(dataId) },
  });
  res.json(data);
}
