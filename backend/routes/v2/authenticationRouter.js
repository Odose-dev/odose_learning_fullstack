import express from "express";

const AuthenticationRouter = express.Router();

AuthenticationRouter.get("/", (req, res) => {
  res.send("This is the route to get Authenticaiton details for API v2");
});

export default AuthenticationRouter;
