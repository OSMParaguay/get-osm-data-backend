"use strict";

import express from "express";
import { reverse } from "../../../controllers/serviceLocation.controller.js";

const router = express.Router();

router.get("/location/v1/reverse/:longitude/:latitude", reverse);

export { router };
