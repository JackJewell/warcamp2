import React from "react";

export function ListContainer({children}) {
    return(
        <div>
            <h2>Selected Units</h2>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default ListContainer;