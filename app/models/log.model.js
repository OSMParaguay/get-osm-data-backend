import mongoose from "mongoose";

const { Schema } = mongoose;
const logSchema = new Schema({
  url: String,
  method: String,
  ip: String,
  geo: Object,
  date: { type: Date, default: Date.now },
});

const Log = mongoose.model("Log", logSchema);

export default Log;
