"use strict";

import dotenv from "dotenv";

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const NOMINATIM_URL_REVERSE = process.env.NOMINATIM_URL_REVERSE;

export { APP_PORT, NOMINATIM_URL_REVERSE };
