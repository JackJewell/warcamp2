const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: { type: String, required: true },
  faction: { type: String, required: true },
  subFaction: { type: String, required: true },
  factionLink: { type: String, required: true },
  totalPoints: {type: Number, required: true},
  units: []
});

const List = mongoose.model("List", listSchema);

module.exports = List;