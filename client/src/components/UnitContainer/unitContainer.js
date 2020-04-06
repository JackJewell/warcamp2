import React from "react";

export function UnitContainer({children}) {
    return(
        <div>
            <h2>Available Units</h2>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default UnitContainer;