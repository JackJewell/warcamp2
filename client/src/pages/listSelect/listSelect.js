import React,{ useState, useEffect } from "react";
import API from "../../utils/API";

function ListSelect(){
    const[lists,setLists] = useState([])

    useEffect(() => {
        loadLists()
      }, [])

    function loadLists() {
    API.getLists()
        .then(res => 
        {console.log(res);
        setLists(res.data)}
        )
        .catch(err => console.log(err));
    };

    function deleteList(id){
        console.log(id.target.id);
         API.deleteList(id.target.id)
             .then(res => 
             {console.log(res)
             window.location.reload(true)}
             )
             .catch(err => console.log(err));
    }
    return(
        <div>
            <h4>Build a new list</h4>
                <a className="uk-icon-button uk-button-secondary" data-uk-icon="plus" href = {"/newlist/buildList/new"}>
            </a>
            <h4>Your Lists</h4>
            <ul className="uk-list">
                {lists.map(result=>{
                    return(
                        <li>
                            <a className="uk-button uk-button-default" href = {"/newlist/buildList/"+result._id}>
                                {result.name+"  "}
                                <button id = {result._id} onClick = {e => {deleteList(e,"id")}}>X</button>
                            </a>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListSelect;