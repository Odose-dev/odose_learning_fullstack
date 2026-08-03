import express from "express";
const router = express.Router();

import { loggingMiddleware } from "../../server.js";

//index routes
router.get("/", loggingMiddleware, (req, res) => {
  console.log("Welcome v1 Admin");

  res.send("Welcome v1 Admin");
});

router.get("/:id", loggingMiddleware, (req, res) => {
  console.log(req.params.id);

  res.send("Welcome v1 Admin");
});

export default router;
