const mongoose = require("mongoose");

const sphereCube = new mongoose.Schema({
  cube: Object,
  volume: Number,
});

module.exports = mongoose.model("Cube", cubeSchema);
