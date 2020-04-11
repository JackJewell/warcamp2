import React from "react";

const Unit = (props) => {
    return(
        <div className="uk-card uk-card-default uk-padding-small">
            <div className="uk-grid-small" data-uk-grid>
                <h5 className="uk-card-title uk-width-expand font">{props.name}</h5>
                <p>Points: {props.points}</p>
            </div>
            <br></br>
            <div className = "uk-padding-small">
                {props.children}
            </div>
        </div>
    )
}

export default Unit;