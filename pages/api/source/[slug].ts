import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import type { Source, ResponseError } from "../../../interfaces";

export default async function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Source | ResponseError>
) {
  const { query } = req;
  const { slug } = query;
  // const person = people.find((p) => p.id === id)

  const source = await prisma.source.findMany({
    where: {
      published: true,
      slug: String(slug),
    },
  });

  // User with id exists
  return source
    ? res.status(200).json(source)
    : res.status(404).json({ message: `Source with: ${slug} not found.` });
}
