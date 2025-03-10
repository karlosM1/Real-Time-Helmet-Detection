import express from "express";

import { login, register } from "../controllers/authentication";

export default (router: express.Router) => {
  router.post(
    "/auth/register",
    (req: express.Request, res: express.Response) => {
      register(req, res);
    }
  );
  router.post("/auth/login", (req: express.Request, res: express.Response) => {
    login(req, res);
  });
};
