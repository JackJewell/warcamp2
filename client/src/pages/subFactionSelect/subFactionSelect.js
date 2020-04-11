import React,{ useState, useEffect } from "react";
import API from "../../utils/API";

function SubFactionSelect(props){
    const[faction] = useState(props.match.params.faction)
    const[subFaction,setSubFaction] = useState([])
    const[selectedSubFaction,setSelectedSubFaction] = useState()
    const[listName,setListName] = useState()
    console.log(faction);

    useEffect(() => {
        loadSubFactions()
      }, [])

    function loadSubFactions() {
        API.getSubFactions(faction)
            .then(res => 
            {console.log(res);
            setSubFaction(res.data)}
            )
            .catch(err => console.log(err));
    };

    function saveList(event){
        event.preventDefault();
        let newListName = document.getElementById('listName').value;
        setListName(listName);
        let radioSubFaction = document.querySelector('input[name = "faction"]:checked').id;
        console.log(radioSubFaction);
        setSelectedSubFaction(radioSubFaction);
        commitList(newListName,radioSubFaction);
        
    }

    function commitList(name,subFaction){
        let factionVar = "";
        switch(faction){
            case "kateria":
                factionVar = "The Katerian Empire"
                break;
            case "kotimaa":
                factionVar = "The Kingdom of Kotimaa"
                break;
            case "dreng":
                factionVar = "The Clans of Drenglanda"
                break;
            default:
                break;
        }
        let listVar = {name: name, faction: factionVar,factionLink: faction, subFaction: subFaction, totalPoints: 0, units: []}
        console.log(listVar);
        API.createNewList(listVar)
            .then(res => 
            {console.log(res);
            setTimeout(
                window.location.pathname = `/newlist/buildList/${res.data._id}`,3000
            )
            }
             )
            .catch(err => console.log(err));
    }
    
    console.log(subFaction);
    return(
        <div>
            <form>
                <p>Name your new List:</p>
                <input id = "listName" type = "text"></input>
                
                <p>Select a subfaction for your new List</p>
                <h2>{subFaction.mainFaction}</h2>
                <h4>SubFactions</h4>
                
                
                <ul>
                {subFaction.map(result =>{
                    return(
                        <div>
                            <input id = {result.name} name = "faction" type = "radio"/>
                                <label for={result.name}>{result.name}</label><br/>
                        </div>
                             
                    )
                })}
                </ul>
                <input type = "submit" onClick = {saveList}></input>
            </form>
        </div>
    )
}

export default SubFactionSelect;