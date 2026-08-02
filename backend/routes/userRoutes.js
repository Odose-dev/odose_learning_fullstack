import express from "express";

const Userrouter = express.Router();

Userrouter.get("/", (req, res) => {
  res.send("Welcome to the Users API v1");
});

Userrouter.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({ id });
});

export default Userrouter;
