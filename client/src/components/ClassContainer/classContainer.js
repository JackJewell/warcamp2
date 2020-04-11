import React from "react";

export function ClassContainer(props) {
    return(
        <li className="uk-closed">
            <h3 className="uk-accordion-title">{props.className}</h3>
            <ul className="uk-accordion-content">
                {props.children}
            </ul>
        </li>
    );
}

export default ClassContainer;