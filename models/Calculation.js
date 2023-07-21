const mongoose = require("mongoose");
const calculationSchema = new mongoose.Schema({
  operation: {
    type: String,
    require: true,
    trim: true,
  },
  num1: {
    type: Number,
    require: true,
  },
  num2: {
    type: Number,
    require: true,
  },
  result: {
    type: Number,
    require: true,
    null: false,
  },
});

module.exports = mongoose.model("Cal", calculationSchema);
