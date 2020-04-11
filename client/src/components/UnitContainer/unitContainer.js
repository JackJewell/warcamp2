import React from "react";

export function UnitContainer({children}) {
    return(
        <div>
            <h2>Available Units</h2>
            <hr className="uk-divider-icon"></hr>
            <ul data-uk-accordion>
                {children}
            </ul>
        </div>
    );
}

export default UnitContainer;