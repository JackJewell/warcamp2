const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  points: {type: Number, required: true},
  faction: {type: String, required: true},
  stats: {
    meleeSkill: {type: Number, required: true},
    rangedSkill: {type: Number, required: true},
    range: {type: Number, required: true},
    armorValue: {type: Number, required: true},
    manpower: {type: Number, required: true},
    bravery: {type: Number, required: true},
    leadership: {type: Number, required: true}
  },
  traits: [],
  weaponry: [],
  abilities: []
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;