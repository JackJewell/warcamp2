import React from "react";

const GlobalState = React.createContext({
    username: "Traveller",
    userId: "",
    isLoggedIn: false,
    setUser: (userVar) => this.setState({
        username: userVar.username,
        userId: userVar.userId,
        isLoggedIn: true
    }),
    logOut: () => this.setState({
        username: "Traveller",
        userId: "",
        isLoggedIn: false
    })
});

export default GlobalState;