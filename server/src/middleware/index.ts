import express from "express";
import { merge } from "lodash";
import { getUserBySessionToken } from "../db/users";

export const isAuthenticated: express.RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const sessionToken = req.cookies["AUTH"];

    if (!sessionToken) {
      console.log("No session token found");
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    merge(req, { identity: existingUser });

    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
