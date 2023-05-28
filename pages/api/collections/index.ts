import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type Data = {
  results: string[];
};

// GET /api/test?searchString=:searchString
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json("All Collections");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
