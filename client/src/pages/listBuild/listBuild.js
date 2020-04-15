import React,{Component} from "react";
import ListContainer from "../../components/ListContainer";
import ListItem from "../../components/ListItem";
import UnitContainer from "../../components/UnitContainer";
import ClassContainer from "../../components/ClassContainer";
import Unit from "../../components/Unit";
import API from "../../utils/API";

class ListBuild extends Component{
    state = {
        id: "",
        totalListPoints: 0,
        listName: "",
        selectedUnits: [],
        availableUnits: [],
        faction: "",
        factionLink: "",
        subFaction: ""
    }
    
    loadList(){
        let listId = this.props.match.params.id;
        API.getSpecificList(listId)
            .then(res => 
            {console.log(res);
             this.setState({
                 id: res.data._id,
                 listName: res.data.name,
                 faction: res.data.faction,
                 factionLink: res.data.factionLink,
                 subFaction: res.data.subFaction,
                 totalListPoints: res.data.totalPoints,
                 selectedUnits: res.data.units
                })
             this.loadUnits()}
            )
            .catch(err => console.log(err));
    }

    componentDidMount(){
        this.loadList();
    }

    loadUnits(){     
        API.getUnits(this.state.factionLink)
            .then(res => {
            console.log(res);
            this.setState({availableUnits: res.data})
            }
            )
            .catch(err => console.log(err))
    }

    addPoints(){
        let pointTotal = 0;
        this.state.selectedUnits.map(result=>{
            let points = parseInt(result.points);
            pointTotal = points + pointTotal;
            return points;
        })
        this.setState({totalListPoints: pointTotal})
    }

    addUnits(event){
        API.getUnitStats(event.target.id)
            .then(res => {
            console.log(res); 
            let newId = this.state.selectedUnits.length;
            newId++;
            let unit = {
                name: res.data.name,
                points: res.data.points,
                unitId: res.data._id,
                availableWeaponry: res.data.weaponry,
                selectedWeaponry: "",
                id: newId
                }
            this.updateUnitList(unit)
            }
            )
            .catch(err => console.log(err))
    }
    
    updateUnitList(unit){
        console.log(unit);
        let unitArray = this.state.selectedUnits;
        unitArray.push(unit);
        this.setState({selectedUnits: unitArray});
        this.addPoints();
    }

    saveList(state){
        console.log(state)

        let listVar = {
            name: state.listName,
            faction: state.faction,
            factionLink: state.factionLink, 
            subFaction: state.subFaction,
            totalPoints: state.totalListPoints,
            units: state.selectedUnits
         };
         API.updateList(this.state.id,listVar)
             .then(res => {
                 console.log(res.data);
                 }
                 )
                 .catch(err => console.log(err))
    }

    removeUnit(event){
        console.log(event.target.value);
        let unitId = event.target.value;
        let i = 0;
        let unitArray = this.state.selectedUnits;
        unitArray.map(result =>{
            if(result.id == unitId){
                unitArray.splice(i,1);
                this.setState({selectedUnits: unitArray});
                this.addPoints();
            }
            i++;
        })
    }

    saveWeaponry(event){
        console.log("set weapon")
        let id = event.target.id;
        let newWeapon = event.target.value;
        this.setState({...this.state.selectedUnits[id], selectedWeaponry: newWeapon})
    }

    render(){
        return(
            <div>
                <h1>{this.state.listName}</h1>
                <button className="uk-button uk-button-default" onClick= {e => this.saveList(this.state)}>Save</button>
                <h3>Faction: {this.state.faction}</h3>
                <h5>Subfaction: {this.state.subFaction}</h5>
                <h3>Total Points: {this.state.totalListPoints}</h3>
                <UnitContainer>
                    <ClassContainer className = "Command">
                        {this.state.availableUnits.map(result=>{
                            if(result.class === "command"){
                               return(
                                    <div>
                                        <Unit id={result.id} name = {result.name} class = {result.class} points = {result.points} stats = {result.stats} traits={result.traits} abilities = {result.abilities} weaponry = {result.weaponry}>
                                            <button className = "uk-float-right uk-margin-small" id = {result._id} onClick = {e => this.addUnits(e, "value")}>+</button>
                                        </Unit>
                                    </div>
                                ) 
                            }
                        })}
                    </ClassContainer>
                    <ClassContainer className = "Infantry">
                        {this.state.availableUnits.map(result=>{
                            if(result.class === "infantry"){
                               return(
                                    <div>
                                        <Unit  name = {result.name} class = {result.class} points = {result.points} stats = {result.stats} traits={result.traits} abilities = {result.abilities} weaponry = {result.weaponry}>
                                            <button  className = "uk-float-right uk-margin-small"  id = {result._id} onClick = {e => this.addUnits(e, "id")}>+</button>
                                        </Unit>
                                    </div>
                                ) 
                            }
                        })}
                    </ClassContainer>
                    <ClassContainer className = "Ranged">
                        {this.state.availableUnits.map(result=>{
                            if(result.class === "ranged"){
                               return(
                                    <div>
                                        <Unit  name = {result.name} class = {result.class} points = {result.points} stats = {result.stats} traits={result.traits} abilities = {result.abilities} weaponry = {result.weaponry}>
                                            <button  className = "uk-float-right uk-margin-small"  id = {result._id} onClick = {e => this.addUnits(e, "id")}>+</button>
                                        </Unit>
                                    </div>
                                ) 
                            }
                        })}
                    </ClassContainer>
                    <ClassContainer className = "Cavalry">
                        {this.state.availableUnits.map(result=>{
                            if(result.class === "cavalry"){
                               return(
                                    <div>
                                        <Unit  name = {result.name} class = {result.class} points = {result.points} stats = {result.stats} traits={result.traits} abilities = {result.abilities} weaponry = {result.weaponry}>
                                            <button  className = "uk-float-right uk-margin-small"  id = {result._id} onClick = {e => this.addUnits(e, "id")}>+</button>
                                        </Unit>
                                    </div>
                                ) 
                            }
                        })}
                    </ClassContainer>
                </UnitContainer>

                <ListContainer>
                    {this.state.selectedUnits.map(result=>{
                        return(
                            <div>
                                <ListItem id = {result.id} name = {result.name} points = {result.points} weaponry = {result.availableWeaponry} selection = {result.selectedWeaponry} saveFunction = {this.saveWeaponry}>
                                    <button className="uk-float-right uk-padding-small uk-padding-remove-vertical uk-button uk-button-default" type = "button" value = {result.id} onClick = {e => this.removeUnit(e,"value")} >x</button>
                                </ListItem>
                            </div>
                        )
                    })}
                </ListContainer>

                
            </div>
        )    
    }
}

export default ListBuild;