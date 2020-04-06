import React from "react";

const Faction = (props) => {
    return(
        <button >
            <a href = {"/newList/"+props.link}>{props.name}</a>
        </button>
    )
}

export default Faction;