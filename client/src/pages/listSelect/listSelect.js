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
            <p>list select page</p>
            <ul>
                <li>
                    <a className="uk-button uk-button-default" href = {"/newlist/buildList/new"}>
                            Build New List
                    </a>
                </li>
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