import React from "react";
import API from "../../utils/API";

const ListSelect = () => {
    let lists = API.getLists();
    return(
        <div>
            <p>list select page</p>
            <ul>
                {lists.map(result=>{
                    return(
                        <li>
                            <button>
                                <a href = {"/newlist/buildList/"+result.id} value = {result.index}>
                                    {result.name}
                                </a>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListSelect;