import React,{Component} from "react";
import ListContainer from "../../components/ListContainer";
import ListItem from "../../components/ListItem";
import UnitContainer from "../../components/UnitContainer";
import Unit from "../../components/Unit";
import API from "../../utils/API";

class ListBuild extends Component{
    state = {
        totalListPoints: 0,
        listItems: [],
        availableUnits: [],
        faction: "",
        subfaction: ""
    }
    
    loadList(){
        let listSelect = this.props.match.params.id;
        let listLoad = API.getLists();
        let faction = listLoad[listSelect].faction;
        let subfaction = listLoad[listSelect].subfaction;
        let selectedList = listLoad[listSelect].units;
        let totalPoints = listLoad[listSelect].totalPoints;
        console.log(selectedList);
        this.setState({listItems:selectedList,faction: faction,subfaction: subfaction,totalListPoints: totalPoints});
    }

    componentDidMount(){
        let units = API.getUnits();
        this.setState({availableUnits : units});
        this.loadList();
    }

    addPoints(){
        let pointTotal = 0;
        this.state.listItems.map(result=>{
            let points = parseInt(result.points);
            console.log(points);
            pointTotal = points + pointTotal;
            console.log(pointTotal);
            return points;
        })
        this.setState({totalListPoints: pointTotal})
    }

    addUnits(event){
        let unit = {
            name: event.target.name,
            points: event.target.value
        }
        console.log(unit);
        let unitArray = this.state.listItems;
        unitArray.push(unit);
        this.setState({listItems: unitArray});
        this.addPoints();
    }
    render(){
        return(
            <div>
                <p>list build page</p>
                <h3>Faction: {this.state.faction}</h3>
                <h5>subfaction: {this.state.subfaction}</h5>
                <h3>Total Points: {this.state.totalListPoints}</h3>
                <UnitContainer>
                {this.state.availableUnits.map(result=>{
                    return(
                        <div>
                            <Unit key = {result.name} name = {result.name} class = {result.class} points = {result.points}/>
                            <button name = {result.name} value = {result.points} onClick = {e => this.addUnits(e, "value")}>+</button>
                        </div>
                    )
                })}
                    
                </UnitContainer>
                <ListContainer>
                    {this.state.listItems.map(result=>{
                        return(
                            <ListItem name = {result.name} points = {result.points}/>
                        )
                    })}
                </ListContainer>
            </div>
        )    
    }
}

export default ListBuild;