import React,{ useState, useEffect } from "react";
import Faction from "../../components/Faction"
import API from "../../utils/API";

function FactionSelect(){
    const [factions, setFactions] = useState([])

    useEffect(() => {
        loadFactions()
      }, [])
    
      // Loads all books and sets them to books
      function loadFactions() {
        API.getFactions()
          .then(res => 
            setFactions(res.data)
          )
          .catch(err => console.log(err));
      };
      console.log(factions);
    return(
        <div>
            <p>Select a faction for your new List</p>
            <h4>Factions</h4>
            <ul>
            {factions.map(result =>{
                return(
                    <li>
                        <Faction name = {result.name} link = {result.link}/>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default FactionSelect;