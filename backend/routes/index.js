import express from "express";

// routes
import indexRouter from "./indexRouter.js";
import Userrouter from "./userRoutes.js";
import Authenticationrouter from "./authenticationRouter.js";

const router = express.Router();

//index routes
router.use("/", indexRouter);

// user routes
router.use("/users", Userrouter);

// Authentication routes
router.use("/auth", Authenticationrouter);

export default router;
