const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  points: {type: Number, required: true},
  faction: {type: String, required: true}
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;