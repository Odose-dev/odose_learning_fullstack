import express from "express";

// routes
import indexRouter from "./indexRouter.js";
import Userrouter from "./userRoutes.js";

const router = express.Router();

//index routes
router.use("/", indexRouter);

// user routes
router.use("/users", Userrouter);

export default router;
