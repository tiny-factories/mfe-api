import { NextApiResponse, NextApiRequest } from "next";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[String]>
) {
  return res.status(200);
}
