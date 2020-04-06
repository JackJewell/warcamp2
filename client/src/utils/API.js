export default{
    getFactions(){
        let factions = [{factionName: "The Katerian Empire", link: "kateria"},{factionName: "The Kingdom of Kotimaa", link: "kotimaa"},{factionName: "The Clans of Drenglanda" ,link: "dreng"}]
        return factions;
    },
    getSubFactions(faction){
        let allFactions = {};
        switch(faction){
            case "kateria":
                allFactions = {
                    mainFaction: "The Katerian Empire",
                    subFactions: ["The Kingdom of Kateria","The Kingdom of Grundholm","The Kingdom of Vergneou","The Kingdom of Vearland","Default"]}
                return allFactions;
            case "kotimaa":
                allFactions = {
                    mainFaction : "The Kingdom of Kotimaa",
                    subFactions: ["House Embersoul","Default"]}
                return allFactions;
            case "dreng":
                allFactions = {
                    mainFaction: "The Clans of Drenglanda",
                    subFactions: ["Clan Nattung","Default"]}
                return allFactions;
            default:
                break;
        }
        
        
    },
    getUnits(){
        let units = [{name: "Heavy Infantry", class: "infantry",points: 100},{name:"Archers", class: "ranged", points: 80}, {name: "Mounted Knights",class: "cavalry", points: 130}];
        return units;
    },
    getLists(){
        let lists = [
            {name: "Build New List", faction: "", subfaction: "", id: "new", totalPoints: 0, units: []},
            {name: "Infantry List", faction: "Katerian Empire", subfaction: "The Kingdom of Grundholm", id: 1, totalPoints: 410, units: [{name: "Heavy Infantry",points: 100},{name: "Heavy Infantry",points: 100},{name: "Archers",points: 80},{name: "Mounted Knights",points: 130}]},
            {name: "Archer List", faction: "Katerian Empire", subfaction: "The Kingdom of Vearland", id: 2, totalPoints: 390, units: [{name: "Heavy Infantry",points: 100},{name: "Archers",points: 80},{name: "Archers",points: 80},{name: "Mounted Knights",points: 130}]},
            {name: "Knight List", faction: "Katerian Empire", subfaction: "The Kingdom of Vergneou", id: 3, totalPoints: 520, units: [{name: "Mounted Knights",points: 130},{name: "Mounted Knights",points: 130},{name: "Mounted Knights",points: 130},{name: "Mounted Knights",points: 130}]}
        ]
        
        return lists;
    }
}