import React from "react";

const ListItem = (props) => {
    return(
        <div>
            <h5>{props.name}: {props.points}</h5>
            <button>X</button>
        </div>
    )
}

export default ListItem;