import axios from "axios";

export default{
    getFactions: function() {
        return axios.get("/api/factions");
    },
    getSubFactions(faction){
        return axios.get(`/api/subfactions/all/${faction}`)
    },
    getUnits(faction){
        return axios.get(`/api/units/all/${faction}`)
    },
    getUnitStats(id){
        return axios.get(`/api/units/${id}`)
    },
    getLists(){
        return axios.get("/api/lists")
    },
    getUserLists(userId){
        return axios.get(`/api/lists/user/${userId}`)
    },
    getSpecificList(id){
        return axios.get(`/api/lists/${id}`)
    },
    createNewList(listVar){
        return axios.post(`/api/lists/`,listVar)
    },
    updateList(id,listVar){
        return axios.put(`/api/lists/${id}`,listVar)
    },
    deleteList(id){
        return axios.delete(`/api/lists/${id}`)
    },
    checkUser(username){
        return axios.get(`/api/users/validate/${username}`)
    },
    createUser(userVar){
        return axios.post(`/api/users`,userVar)
    }
}