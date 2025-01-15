import express from "express";
import { documentRoute, authRoute } from "./routes/index.js";
import { verifyToken } from "./middleware/auth.js";

const app = express();
const prefix = "/api/v1";

app.use(express.json());

//use routes here
app.use(`${prefix}/document`, verifyToken, documentRoute);
app.use(`${prefix}/auth`, authRoute);

app.all("*", (req, res) => {
  console.log(req.url);
  return res.status(404).json({
    message: req.url + " not found on this server :(",
  });
});

export default app;
