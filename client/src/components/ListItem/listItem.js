import React from "react";

const ListItem = (props) => {
    return(
        <div>
            <hr ></hr>
            <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-expand"><h5>{props.name}</h5></div>
                    <div className="uk-padding-small">{props.points}</div>
                    {props.children}
            </div>
        </div>
    )
}

export default ListItem;