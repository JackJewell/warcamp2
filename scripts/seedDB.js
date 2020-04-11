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
  {name: "The Kingdom of Kateria", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Grundholm", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Vergneou", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "The Kingdom of Vearland", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "Default", mainFaction: "The Katerian Empire", mainFactionLink: "kateria"},
  {name: "House Embersoul", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "House Taletreader", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "Default", mainFaction: "The Kingdom of Kotimaa", mainFactionLink: "kotimaa"},
  {name: "Clan Nattung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Clan Gjorung", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"},
  {name: "Default", mainFaction: "The Clans of Drenglanda", mainFactionLink: "dreng"}
];

const unitSeed = [
  {name: "Duke",class: "command",points: 150,faction: "kateria"},
  {name: "Heavy Infantry",class: "infantry",points: 100,faction: "kateria"},
  {name: "Crossbowmen",class: "ranged",points: 80,faction: "kateria"},
  {name: "Mounted Knights",class: "cavalry",points: 130,faction: "kateria"},
  {name: "Lehyva Lord",class: "command",points: 150,faction: "kotimaa"},
  {name: "Koyha Infantry",class: "infantry",points: 100,faction: "kotimaa"},
  {name: "Koyha Archers",class: "ranged",points: 80,faction: "kotimaa"},
  {name: "Lehyva Druzhina Horsemen",class: "cavalry",points: 130,faction: "kotimaa"},
  {name: "Jarl",class: "command",points: 150,faction: "dreng"},
  {name: "Huscarls",class: "infantry",points: 100,faction: "dreng"},
  {name: "Javelin Throwers",class: "ranged",points: 80,faction: "dreng"},
  {name: "Raiders",class: "cavalry",points: 130,faction: "dreng"}
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

