import { NextApiResponse, NextApiRequest } from "next";
import { Data } from "../../../interfaces";
import prisma from "../../../lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const people = await prisma.data.findMany();

  return res.status(200).json(people);
}
