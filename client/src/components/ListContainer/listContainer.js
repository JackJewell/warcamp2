import React from "react";

export function ListContainer({children}) {
    return(
        <div>
            <h2>Selected Units</h2>
            <hr className="uk-divider-icon"></hr>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default ListContainer;