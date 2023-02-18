import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import type { License, ResponseError } from "../../../interfaces";

export default async function licenseHandler(
  req: NextApiRequest,
  res: NextApiResponse<License | ResponseError>
) {
  const { query } = req;
  const { slug } = query;

  const license = await prisma.license.findMany({
    where: {
      slug: String(slug),
    },
  });

  // User with id exists
  return license
    ? res.status(200).json(license)
    : res.status(404).json({ message: `License: ${slug} not found.` });
}
