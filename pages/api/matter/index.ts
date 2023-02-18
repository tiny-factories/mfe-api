import { NextApiResponse, NextApiRequest } from "next";
import { Matter } from "../../../interfaces";
import prisma from "../../../lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Matter[]>
) {
  const people = await prisma.matter.findMany();

  return res.status(200).json(people);
}
