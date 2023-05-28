import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/test?searchString=:searchString
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collectionId = req.query.id;

  try {
    const collectionPageData = await prisma.collections.findUnique({
      where: {
        slug: String(collectionId),
      },
    });
    // console.log("API Response" + JSON.stringify(record));
    const response = {
      pageData: collectionPageData,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    res.status(401).send({ message: "Unauthorized" });
  }
}
