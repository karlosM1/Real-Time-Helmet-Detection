import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sesstionToken = req.cookies["AUTH"];

    if (!sesstionToken) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const existingUser = await getUserBySessionToken(sesstionToken);

    if (!existingUser) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    merge(req, { identity: existingUser });

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
