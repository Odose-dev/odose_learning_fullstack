import express from "express";

const router = express.Router();

//index routes
router.get("/", (req, res) => {
  res.send("Welcome to our API v2");
});

export default router;
