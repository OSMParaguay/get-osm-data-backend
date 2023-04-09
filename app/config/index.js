"use strict";

import dotenv from "dotenv";

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const MONGO_URI = process.env.MONGO_URI;
const NOMINATIM_URL_REVERSE = process.env.NOMINATIM_URL_REVERSE;

export { APP_PORT, MONGO_URI, NOMINATIM_URL_REVERSE };
