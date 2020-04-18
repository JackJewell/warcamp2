const mongoose = require("mongoose");
const db = require("../models");

//This file empties the database and inserts the seeds below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/warcampDB", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

const factionSeed = [
    {name: "The Katerian Empire", link: "kateria"},
    {name: "The Kingdom of Kotimaa", link: "kotimaa"},
    {name: "The Clans of Drenglanda" ,link: "dreng"}
];

const subFactionSeed = [
    //The Katerian Empire
  {name: "The Kingdom of Kateria", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Revellund", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Furthmark", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Thallund", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Grundholm", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Triechel", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Vergneou", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Caillaech", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Gowland", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Vearland", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Dumbria", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Eberail", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Yovakia", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Kovoria", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Costadoro", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "Default", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  //The Kingdom of Kotimaa
  {name: "House Frostshore", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Brightorb", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Moonstone", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Lightforge", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Ravenson", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Stormkeep", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Silvermark", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Moonstone", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Embersoul", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Hallowbrook", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Taletreader", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Mountainroot", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Runeweaver", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "Default", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  //The Clans of Drenglanda
  {name: "Clan Gjorung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Nattung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Bjarnung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Fiskrung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Hreinnung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Ulfrung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Reithung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Yxenung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Frothung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Ormrung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Hafrung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Default", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"}
];

const unitSeed = [
  //The Katerian Empire
  //command
  {name: "Duke",class: "command",points: 65,faction: "kateria",stats:{
    meleeSkill: 3,
    rangedSkill: 0,
    range: 1,
    armorValue: 0,
    manpower: 0,
    bravery: 3,
    leadership: 13
  },
  traits: ["Katerian Empire","Command","[Subfaction]"],
  weaponry: ["The Griffon Banner","The Banner of St. Olwyn","The Banner of St. Roland","The Banner of St. Callisto"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "Count",class: "command",points: 55,faction: "kateria",stats:{
      meleeSkill: 2,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 3,
      leadership: 11
  },
  traits: ["Katerian Empire","Command","[Subfaction]"],
  weaponry: ["The Banner of St. Olwyn","The Banner of St. Roland","The Banner of St. Callisto"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "Baron",class: "command",points: 40,faction: "kateria",stats:{
      meleeSkill: 1,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 2,
      leadership: 8
  },
  traits: ["Katerian Empire","Command","[Subfaction]"],
  weaponry: ["The Banner of St. Olwyn","The Banner of St. Roland","The Banner of St. Callisto"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "Knight-Captain",class: "command",points: 30,faction: "kateria",stats:{
      meleeSkill: 1,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 1,
      leadership: 6
  },
  traits: ["Katerian Empire","Command","[Subfaction]"],
  weaponry: ["The Banner of St. Olwyn","The Banner of St. Roland","The Banner of St. Callisto"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  //infantry
  {name: "Peasant Mob",class: "infantry",points: 50,faction: "kateria",stats:{
      meleeSkill: 2,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 150,
      bravery: 2,
      leadership: 0
  },
  traits: ["Katerian Empire","Infantry","[Subfaction]"],
  weaponry: ["Spears"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."
              ]
  },
  {name: "Levies",class: "infantry",points: 75,faction: "kateria",stats:{
      meleeSkill: 3,
      rangedSkill: 0,
      range: 1,
      armorValue: 1,
      manpower: 150,
      bravery: 3,
      leadership: 0
  },
  traits: ["Katerian Empire","Infantry","[Subfaction]"],
  weaponry: ["Spears","Two-handed Axes","Halberds"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Sergeants",class: "infantry",points: 90,faction: "kateria",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Katerian Empire","Infantry","[Subfaction]"],
  weaponry: ["Spears","Two-handed Axes","Halberds","Swords and Shields","Pikes","Warhammers"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Men-at-Arms",class: "infantry",points: 110,faction: "kateria",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 4,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Katerian Empire","Infantry","[Subfaction]"],
  weaponry: ["Halberds","Pikes","Pollaxes","Warhammers"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Foot Knights",class: "infantry",points: 130,faction: "kateria",stats:{
      meleeSkill: 6,
      rangedSkill: 0,
      range: 1,
      armorValue: 5,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Katerian Empire","Infantry","[Subfaction]"],
  weaponry: ["Pollaxes","Longswords","Warhammers"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  //ranged
  {name: "Levy Archers",class: "ranged",points: 80,faction: "kateria",stats:{
      meleeSkill: 1,
      rangedSkill: 2,
      range: 12,
      armorValue: 0,
      manpower: 100,
      bravery: 3,
      leadership: 0
  },
  traits: ["Katerian Empire","Ranged","[Subfaction]"],
  weaponry: ["Field Tips"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Crossbowmen",class: "ranged",points: 100,faction: "kateria",stats:{
      meleeSkill: 1,
      rangedSkill: 3,
      range: 8,
      armorValue: 1,
      manpower: 100,
      bravery: 3,
      leadership: 0
  },
  traits: ["Katerian Empire","Ranged","[Subfaction]"],
  weaponry: ["Field Tips"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Yeoman Archers",class: "ranged",points: 120,faction: "kateria",stats:{
      meleeSkill: 2,
      rangedSkill: 4,
      range: 14,
      armorValue: 5,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Katerian Empire","Ranged","[Subfaction]"],
  weaponry: ["Field Tips","Broadheads","Bodkins"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Guild Crossbowmen",class: "ranged",points: 140,faction: "kateria",stats:{
      meleeSkill: 2,
      rangedSkill: 5,
      range: 10,
      armorValue: 1,
      manpower: 100,
      bravery: 5,
      leadership: 0
  },
  traits: ["Katerian Empire","Ranged","[Subfaction]"],
  weaponry: ["Field Tips","Broadheads","Bodkins"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  //cavalry
  {name: "Scout Cavalry",class: "cavalry",points: 70,faction: "kateria",stats:{
      meleeSkill: 3,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 75,
      bravery: 3,
      leadership: 0
  },
  traits: ["Katerian Empire","Cavalry","[Subfaction]"],
  weaponry: ["Spears","Longswords"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Mounted Sergeants",class: "cavalry",points: 120,faction: "kateria",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 3,
      manpower: 75,
      bravery: 4,
      leadership: 0
  },
  traits: ["Katerian Empire","Cavalry","[Subfaction]"],
  weaponry: ["Spears","Longswords","Lances","Warhammers"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  {name: "Mounted Knights",class: "cavalry",points: 160,faction: "kateria",stats:{
      meleeSkill: 6,
      rangedSkill: 0,
      range: 1,
      armorValue: 4,
      manpower: 75,
      bravery: 6,
      leadership: 0
  },
  traits: ["Katerian Empire","Cavalry","[Subfaction]"],
  weaponry: ["Longswords","Lances","Warhammers"],
  abilities: ["Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."]
  },
  //The Kingdom of Kotimaa
  //command
  {name: "Prince",class: "command",points: 65,faction: "kotimaa",stats:{
    meleeSkill: 3,
    rangedSkill: 0,
    range: 1,
    armorValue: 0,
    manpower: 0,
    bravery: 3,
    leadership: 13
  },
  traits: ["Kingdom of Kotimaa","Command","[Subfaction]"],
  weaponry: ["The Banner of Tasarin","The Banner of Kotimaa"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "High Lord",class: "command",points: 55,faction: "kotimaa",stats:{
      meleeSkill: 2,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 3,
      leadership: 11
  },
  traits: ["Kingdom of Kotimaa","Command","[Subfaction]"],
  weaponry: ["The Banner of Tasarin","The Banner of Kotimaa"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]},
  {name: "House Scion",class: "command",points: 40,faction: "kotimaa",stats:{
      meleeSkill: 1,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 2,
      leadership: 8
  },
  traits: ["Kingdom of Kotimaa","Command","[Subfaction]"],
  weaponry: ["The Banner of Tasarin","The Banner of Kotimaa"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]},
  {name: "Minor Lord",class: "command",points: 30,faction: "kotimaa",stats:{
      meleeSkill: 1,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 1,
      leadership: 6
  },
  traits: ["Kingdom of Kotimaa","Command","[Subfaction]"],
  weaponry: ["The Banner of Tasarin","The Banner of Kotimaa"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]},
  //infantry
  {name: "Koyha Bound-Warriors",class: "infantry",points: 50,faction: "kotimaa",stats:{
      meleeSkill: 2,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 150,
      bravery: 2,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Infantry","[Subfaction]"],
  weaponry: ["Spears","Swords and Shields"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
    },
  {name: "Koyha Infantry",class: "infantry",points: 90, faction: "kotimaa",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Infantry","[Subfaction]"],
  weaponry: ["Spears","Swords and Shields"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
    },
  {name: "Koyha Shield-Bearers",class: "infantry",points: 110, faction: "kotimaa",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 4,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Infantry","[Subfaction]"],
  weaponry: ["Spears","Swords and Shields"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  {name: "Lehyva Noble-Sons",class: "infantry",points: 130,faction: "kotimaa",stats:{
      meleeSkill: 6,
      rangedSkill: 0,
      range: 1,
      armorValue: 5,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Infantry","[Subfaction]"],
  weaponry: ["Spears","Swords and Shields"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  //ranged
  {name: "Koyha Scouts",class: "ranged",points: 100,faction: "kotimaa",stats:{
      meleeSkill: 2,
      rangedSkill: 4,
      range: 14,
      armorValue: 5,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Ranged","[Subfaction]"],
  weaponry: ["Field Tips","Bodkins","Broadheads"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  {name: "Koyha Archers",class: "ranged",points: 120,faction: "kotimaa",stats:{
      meleeSkill: 2,
      rangedSkill: 4,
      range: 14,
      armorValue: 5,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Ranged","[Subfaction]"],
  weaponry: ["Field Tips","Bodkins","Broadheads"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  {name: "Lehyva Longbowmen",class: "ranged",points: 140,faction: "kotimaa",stats:{
      meleeSkill: 2,
      rangedSkill: 4,
      range: 14,
      armorValue: 5,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Ranged","[Subfaction]"],
  weaponry: ["Field Tips","Bodkins","Broadheads"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  //cavalry
  {name: "Koyha Horse-Archers",class: "cavalry",points: 130,faction: "kotimaa",stats:{
      meleeSkill: 3,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 75,
      bravery: 3,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Cavalry","[Subfaction]"],
  weaponry: ["Field Tips","Bodkins","Broadheads","Spears"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  {name: "Koyha Lancers",class: "cavalry",points: 140,faction: "kotimaa",stats:{
      meleeSkill: 3,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 75,
      bravery: 3,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Cavalry","[Subfaction]"],
  weaponry: ["Lances"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  {name: "Lehyva Druzhina Horsemen",class: "cavalry",points: 160,faction: "kotimaa",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 3,
      manpower: 75,
      bravery: 4,
      leadership: 0
  },
  traits: ["Kingdom of Kotimaa","Cavalry","[Subfaction]"],
  weaponry: ["Lances","Longswords"],
  abilities: ["Elven Grace: This unit's armor profile is 1 higher (to a maximum of 5) when attacked with ranged weapons"]
  },
  //Clans of Drenglanda
  //command
  {name: "King",class: "command",points: 65,faction: "dreng",stats:{
    meleeSkill: 3,
    rangedSkill: 0,
    range: 1,
    armorValue: 0,
    manpower: 0,
    bravery: 3,
    leadership: 13
  },
  traits: ["Clans of Drenglanda","Command","[Subfaction]"],
  weaponry: ["The Banner of Odin","The Banner of Tyr","The Banner of Thor"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Drengish Might: Assign a fear token to an enemy unit each time this one attacks it",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "Jarl",class: "command",points: 55,faction: "dreng",stats:{
      meleeSkill: 2,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 3,
      leadership: 11
  },
  traits: ["Clans of Drenglanda","Command","[Subfaction]"],
  weaponry: ["The Banner of Odin","The Banner of Tyr","The Banner of Thor"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Drengish Might: Assign a fear token to an enemy unit each time this one attacks it",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "Warlord",class: "command",points: 40,faction: "dreng",stats:{
      meleeSkill: 1,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 2,
      leadership: 8
  },
  traits: ["Clans of Drenglanda","Command","[Subfaction]"],
  weaponry: ["The Banner of Odin","The Banner of Tyr","The Banner of Thor"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Drengish Might: Assign a fear token to an enemy unit each time this one attacks it",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  {name: "Hirdsman",class: "command",points: 30,faction: "dreng",stats:{
      meleeSkill: 1,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 0,
      bravery: 1,
      leadership: 6
  },
  traits: ["Clans of Drenglanda","Command","[Subfaction]"],
  weaponry: ["The Banner of Odin","The Banner of Tyr","The Banner of Thor"],
  abilities: ["Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
              "Drengish Might: Assign a fear token to an enemy unit each time this one attacks it",
              "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
              ]
  },
  //infantry
  {name: "Thrall Warriors",class: "infantry",points: 50,faction: "dreng",stats:{
      meleeSkill: 2,
      rangedSkill: 0,
      range: 1,
      armorValue: 0,
      manpower: 150,
      bravery: 2,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Infantry","[Subfaction]"],
  weaponry: ["Axes and Shields","Two-handed Axes","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Karl Infantry",class: "infantry",points: 90,faction: "dreng",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Infantry","[Subfaction]"],
  weaponry: ["Axes and Shields","Two-handed Axes","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Raiders",class: "infantry",points: 100,faction: "dreng",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 150,
      bravery: 4,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Infantry","[Subfaction]"],
  weaponry: ["Axes and Shields","Two-handed Axes","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Huskarls",class: "infantry",points: 110,faction: "dreng",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 4,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Infantry","[Subfaction]"],
  weaponry: ["Axes and Shields","Two-handed Axes","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Varangs",class: "infantry",points: 130,faction: "dreng",stats:{
      meleeSkill: 6,
      rangedSkill: 0,
      range: 1,
      armorValue: 5,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Infantry","[Subfaction]"],
  weaponry: ["Axes and Shields","Two-handed Axes","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Berserkers",class: "infantry",points: 130,faction: "dreng",stats:{
      meleeSkill: 6,
      rangedSkill: 0,
      range: 1,
      armorValue: 5,
      manpower: 150,
      bravery: 6,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Infantry","[Subfaction]"],
  weaponry: ["Axes and Shields","Two-handed Axes","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  //ranged
  {name: "Javelin Throwers",class: "ranged",points: 70,faction: "dreng",stats:{
      meleeSkill: 1,
      rangedSkill: 2,
      range: 8,
      armorValue: 0,
      manpower: 100,
      bravery: 3,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Ranged","[Subfaction]"],
  weaponry: ["Javelins"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Karl Archers",class: "ranged",points: 90,faction: "dreng",stats:{
      meleeSkill: 1,
      rangedSkill: 2,
      range: 12,
      armorValue: 0,
      manpower: 100,
      bravery: 3,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Ranged","[Subfaction]"],
  weaponry: ["Field Tips","Bodkins","Broadheads"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  //cavalry
  {name: "Mounted Raiders",class: "cavalry",points: 80,faction: "dreng",stats:{
      meleeSkill: 3,
      rangedSkill: 0,
      range: 1,
      armorValue: 2,
      manpower: 75,
      bravery: 3,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Cavalry","[Subfaction]"],
  weaponry: ["Axes and Shields","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  },
  {name: "Mounted Huskarls",class: "cavalry",points: 110,faction: "dreng",stats:{
      meleeSkill: 4,
      rangedSkill: 0,
      range: 1,
      armorValue: 3,
      manpower: 75,
      bravery: 4,
      leadership: 0
  },
  traits: ["Clans of Drenglanda","Cavalry","[Subfaction]"],
  weaponry: ["Axes and Shields","Spears"],
  abilities: ["Drengish Might: Assign a fear token to an enemy unit each time this one attacks it"]
  }
];


 db.Faction
   .remove({})  .then(() => db.Faction.collection.insertMany(factionSeed))
   .then(data => {
     console.log(data.result.n + " records inserted!");
   })
   .catch(err => {
     console.error(err);
     process.exit(1);
   });

 db.Unit
 .remove({})
 .then(() => db.Unit.collection.insertMany(unitSeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });

 db.SubFaction
 .remove({})
 .then(() => db.SubFaction.collection.insertMany(subFactionSeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });

