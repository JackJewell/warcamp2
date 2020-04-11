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
        listItems: [],
        unitIds: [],
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
                 unitIds: res.data.units,
                })
             this.loadListUnits(res.data.units)
             this.loadUnits()}
            )
            .catch(err => console.log(err));
    }

    loadListUnits(units){
        let unitArray = [];
        units.map(result =>{
            API.getUnitStats(result)
            .then(res => {
                console.log(res);
                let unit = {
                    name: res.data.name,
                    points: res.data.points,
                    id: res.data._id
                }
                unitArray.push(unit);
                this.setState({listItems: unitArray});
            }
            )
            .catch(err => console.log(err));
        })
        
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
        this.state.listItems.map(result=>{
            let points = parseInt(result.points);
            pointTotal = points + pointTotal;
            return points;
        })
        this.setState({totalListPoints: pointTotal})
    }

    addUnits(event){
        let unit = {
            name: event.target.name,
            points: event.target.value,
            id: event.target.id
        }
        console.log(unit);
        let unitArray = this.state.listItems;
        let unitIdArray = this.state.unitIds;
        let newId = event.target.id;
        console.log(newId);
        unitIdArray.push(newId);
        console.log(unitIdArray);
        unitArray.push(unit);
        this.setState({listItems: unitArray, unitIds: unitIdArray});
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
            units: state.unitIds
         };
         API.updateList(this.state.id,listVar)
             .then(res => {
                 console.log(res.data);
                 }
                 )
                 .catch(err => console.log(err))
    }

    removeUnit(unit){
        let unitArray = this.state.unitIds;
        let unitDetailArray = this.state.listItems;
        let unitPos = unitArray.indexOf(unit.target.value);
        unitArray.splice(unitPos,1);
        unitDetailArray.splice(unitPos,1);
        this.setState({unitIds: unitArray,listItems: unitDetailArray});
        this.addPoints();
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
                                        <Unit  name = {result.name} class = {result.class} points = {result.points}>
                                            <button className = "uk-float-right uk-margin-small" id = {result._id} name = {result.name} value = {result.points} onClick = {e => this.addUnits(e, "value")}>+
                                            </button>
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
                                        <Unit  name = {result.name} class = {result.class} points = {result.points}>
                                            <button  className = "uk-float-right uk-margin-small" id = {result._id} name = {result.name} value = {result.points} onClick = {e => this.addUnits(e, "value")}>+</button>
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
                                        <Unit  name = {result.name} class = {result.class} points = {result.points}>
                                            <button  className = "uk-float-right uk-margin-small" id = {result._id} name = {result.name} value = {result.points} onClick = {e => this.addUnits(e, "value")}>+</button>
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
                                        <Unit  name = {result.name} class = {result.class} points = {result.points}>
                                            <button  className = "uk-float-right uk-margin-small" id = {result._id} name = {result.name} value = {result.points} onClick = {e => this.addUnits(e, "value")}>+</button>
                                        </Unit>
                                    </div>
                                ) 
                            }
                        })}
                    </ClassContainer>
                </UnitContainer>
                <ListContainer>
                    {this.state.listItems.map(result=>{
                        return(
                            <div>
                                <ListItem name = {result.name} points = {result.points}>
                                    <button className="uk-float-right uk-margin-small uk-button uk-button-default" type = "button" value = {result.id} onClick = {e => this.removeUnit(e,"value")} >x</button>
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