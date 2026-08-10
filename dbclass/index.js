import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// database config
import connectBD from "./config/db.js";

// routes
import indexRoute from "./route/indexRouter.js";

// Load environment variables from .env file
dotenv.config();

//connect to database
connectBD();

//port
const PORT = process.env.PORT || 9000;

//initiate Server
const server = express();

//middle wares
server.use(cors());
// server.use(bodyParser());

//entry piont
server.get("/", (req, res) => {
  res.status(200).send("Api is healthy");
});

server.use("/api", indexRoute);

server.use((req, res) => {
  res.status(404).send("You are lost");
});

mongoose.connection.on("connected", () => {
  server.listen(PORT, () => console.log(`server runing on port: ${PORT}`));
});
