import express from "express";
import routes from "./routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

export default globalRouter;