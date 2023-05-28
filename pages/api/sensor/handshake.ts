import type { NextApiRequest, NextApiResponse } from "next";

// GET /api/test?API_ROUTE_SECRET=YOU_KEY
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send("You are not authorized to call this API");
  }
  try {
    res.status(200).json("All Collections");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// /sensor/handshake.ts
