import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcone to our api index route");
});

export default router;
