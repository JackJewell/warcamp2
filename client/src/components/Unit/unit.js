import React from "react";

const Unit = (props) => {
    return(
        <div className="uk-card uk-card-default uk-padding-small">
            <div className="uk-grid-small" data-uk-grid>
                <h5 className="uk-card-title uk-width-expand">{props.name}</h5>
                <p>Points: {props.points}</p>
            </div>
            <br></br>
            <div className="uk-overflow-auto">
                <table className = "uk-table uk-table-middle uk-table-divider">
                    <thead>
                        <tr>
                            <th className="uk-table-shrink">Melee Skill</th>
                            <th className="uk-table-shrink">Ranged Skill</th>
                            <th className="uk-table-shrink">Range</th>
                            <th className="uk-table-shrink">Armor Value</th>
                            <th className="uk-table-shrink">Manpower</th>
                            <th className="uk-table-shrink">Bravery</th>
                            <th className="uk-table-shrink">Leadership</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.stats.meleeSkill}</td>
                            <td>{props.stats.rangedSkill}</td>
                            <td>{props.stats.range}</td>
                            <td>{props.stats.armorValue}</td>
                            <td>{props.stats.manpower}</td>
                            <td>{props.stats.bravery}</td>
                            <td>{props.stats.leadership}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h5>Traits:</h5>
                <hr></hr>
                <p>{props.traits.toString()}</p>
                <h5>Abilities:</h5>
                <hr></hr>
                {props.abilities.map(result=>{
                    return(
                        <p>{result}</p>
                    ) 
                })}
                <h5>Available Weaponry:</h5>
                <hr></hr>
                {props.weaponry.map(result=>{
                    return(
                        <p>{result}</p>
                    ) 
                })}
            </div>
            
            <div className = "uk-padding-small">
                {props.children}
            </div>
        </div>
    )
}

export default Unit;