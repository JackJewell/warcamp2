import React from "react";

const ListItem = (props) => {

    function newFunction(data){
        console.log("I've been clicked")
        //props.saveFunction(data)
    }

    return(
        <div className="uk-margin-small">
            <hr ></hr>
            <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-1-1"> 
                    <h4 className="uk-margin uk-width-expand">{props.name}</h4>
                </div>
                <form>
                    <label className="uk-form-label" data-for="form-horizontal-select">Selected Weaponry</label>
                    <select className="uk-select">
                        {props.weaponry.map(result=> {
                            
                            if(result !== props.selection){
                                return(
                                    <option id = {props.id} value = {result} onChange = {e => newFunction(e,"value")}>{result}</option>
                                )
                            }else{
                               return(
                                    <option id = {props.id} value = {result}  onChange = {e => newFunction(e,"value")} selected>{result}</option>
                                ) 
                            }
                            
                        })}
                    </select>
                </form>
                <div className="uk-padding-small uk-width-expand">{props.points}</div>
                {props.children}
            </div>
        </div>
    )
}

export default ListItem;