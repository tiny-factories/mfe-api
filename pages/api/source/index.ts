import { NextApiResponse, NextApiRequest } from "next";
import { Source } from "../../../interfaces";
import prisma from "../../../lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Source[]>
) {
  const sources = await prisma.source.findMany();

  return res.status(200).json(sources);
}
