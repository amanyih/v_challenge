import app from "./src/app.js";
import { config } from "./src/config/index.js";
import mongoose from "mongoose";

const server = app.listen(config.port, () => {
  try {
    mongoose.connect(config.databaseUrl);
  } catch (error) {
    console.log("An Error occurred trying to connect");
  }
  console.log(`server listening on port ${config.port}`);
});
