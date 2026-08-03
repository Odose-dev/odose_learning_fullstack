import ejs from "ejs";
import dotenv from "dotenv";
import express from "express";

//index routes v1 import
import v1Router from "./routes/v1/index.js";
import v2Router from "./routes/v2/index.js";

//load environment variables from .env file
dotenv.config();

// Set port configuration
const PORT = process.env.PORT || 5000;

//initialize the server
const server = express();

//set the view engine to ejs
server.set("view engine", "ejs");

//entry point for the API v1
server.use("/v1/api", v1Router);
server.use("/v2/api", v2Router);

//not found route handler
server.use((req, res) => {
  res.status(404).render("notFound");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export function loggingMiddleware(req, res, next) {
  console.log(req.params.id);
  next();
}
