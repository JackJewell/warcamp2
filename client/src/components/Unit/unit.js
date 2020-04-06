import React from "react";

const Unit = (props) => {
    return(
        <div>
            <h5>{props.name}</h5>
            <p>Class: {props.class}</p>
            <p>Points: {props.points}</p>
        </div>
    )
}

export default Unit;