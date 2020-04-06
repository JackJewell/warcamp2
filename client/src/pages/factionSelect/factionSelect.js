import React from "react";
import Faction from "../../components/Faction"
import API from "../../utils/API";

const FactionSelect = () => {
    let factions = API.getFactions();
    return(
        <div>
            <p>Select a faction for your new List</p>
            <h4>Factions</h4>
            <ul>
            {factions.map(result =>{
                return(
                    <li>
                        <Faction name = {result.factionName} link = {result.link}/>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default FactionSelect;