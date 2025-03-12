import express from "express";
import { getAllUsers } from "../controllers/users";
import { isAuthenticated } from "../middleware";

export default (router: express.Router) => {
  router.get("/users", (req: express.Request, res: express.Response) => {
    getAllUsers(req, res);
  });
};
