import React from "react";

const Faction = (props) => {
    return(
        <a className="uk-button uk-button-default" href = {"/newList/"+props.link}>
            {props.name}
        </a>
    )
}

export default Faction;