import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import type { Data, ResponseError } from "../../../interfaces";

export default async function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>
) {
  const { query } = req;
  const { slug } = query;
  // const person = people.find((p) => p.id === id)

  const person = await prisma.data.findMany({
    where: {
      published: true,
      matterSlug: String(slug),
    },
  });

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `Matter with: ${slug} not found.` });
}
