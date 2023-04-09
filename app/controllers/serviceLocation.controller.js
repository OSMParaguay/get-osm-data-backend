"use strict";

import axios from "axios";
import { NOMINATIM_URL_REVERSE } from "../config/index.js";

const reverse = async (req, res) => {
  const { longitude, latitude } = req.params;
  const zoom = 18;
  const params = {
    format: "json",
    addressdetails: 1,
    zoom,
    lat: latitude,
    lon: longitude,
  };

  try {
    const { data } = await axios.get(NOMINATIM_URL_REVERSE, { params });
    const success = Boolean(data);
    res.status(200).json({
      success,
      data,
    });
  } catch (error) {
    if (error.code) {
      res.status(422).json({
        success: false,
        message: error.code,
      });
    } else if (error.response) {
      const {
        status,
        data: { message },
      } = error.response;
      res.status(status).json({
        success: false,
        message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
};

export { reverse };
