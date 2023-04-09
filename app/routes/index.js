"use strict";

import express from "express";
import { router as mainRouter } from "./main.js";
import { router as locationReverseRouter } from "./location/v1/reverse.js";

const router = express.Router();

router.use(mainRouter);
router.use(locationReverseRouter);

export { router };
