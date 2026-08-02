import express from "express";

const router = express.Router();

//index routes
router.get("/", (req, res) => {
  res.send("Welcome to our API v1");
});

export default router;
