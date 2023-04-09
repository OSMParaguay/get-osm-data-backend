"use strict";

import mongoose from "mongoose";
import { APP_PORT, MONGO_URI } from "./app/config/index.js";
import { app } from "./app/app.js";

// Connect to MongoDB database.
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start server.
    app.listen(APP_PORT, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`The server listening on ${APP_PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
