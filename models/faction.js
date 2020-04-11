const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const factionSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true }
});

const Faction = mongoose.model("Faction", factionSchema);

module.exports = Faction;
