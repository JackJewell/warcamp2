const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subFactionSchema = new Schema({
  name: { type: String, required: true },
  mainFaction: { type: String, required: true },
  mainFactionLink: { type: String, required: true }
});

const SubFaction = mongoose.model("SubFaction", subFactionSchema);

module.exports = SubFaction;