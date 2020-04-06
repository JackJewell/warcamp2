import React from "react";
import Faction from "../../components/Faction"
import API from "../../utils/API";

const SubFactionSelect = (props) => {
    let faction = props.match.params.faction;
    let result = API.getSubFactions(faction);
    let mainFaction = result.mainFaction;
    let subfactions = result.subFactions;
    return(
        <div>
            <p>Select a subfaction for your new List</p>
            <h2>{mainFaction}</h2>
            <h4>Factions</h4>
            <ul>
            {subfactions.map(result =>{
                return(
                    <li>
                        <Faction name = {result} link = "buildList/0"/>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SubFactionSelect;