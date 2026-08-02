import express from "express";

//index routes v1
import indexRouter from "./routes/index.js";

//initialize the server
const server = express();

//entry point for the API v1
server.use("/v1/api", indexRouter);

// server.use("*", (req, res) => {
//   res.status(404).json({ message: "Route not found" });
// })

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
