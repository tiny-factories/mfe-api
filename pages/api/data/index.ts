import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// POST /api/post

export default function handler(req, res) {
  res.status(401).send({ message: "Hello" });
}
