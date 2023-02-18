import { NextApiResponse, NextApiRequest } from "next";
import { License } from "../../../interfaces";
import prisma from "../../../lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<License[]>
) {
  const licenses = await prisma.license.findMany();

  return res.status(200).json(licenses);
}
