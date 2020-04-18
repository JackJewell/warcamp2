import React, {useState, useContext} from "react";
import "./style.css"
import API from "../../utils/API"
import GlobalState from "../../utils/GlobalState";

function Login (){
    const[loginOpen,setLoginOpen] = useState(true);
    const[registerOpen,setRegisterOpen] = useState(false);
    const[username,setUsername] = useState();
    const[password,setPassword] = useState();
    const[email,setEmail] = useState();
    const globalState = useContext(GlobalState);

    function updateUsername(e){
        setUsername(e.target.value);
        console.log(username);
    }

    function updatePassword(e){
        setPassword(e.target.value);
    }  

    function updateEmail(e){
        setEmail(e.target.value);
    }

    function registerUser(e){
        e.preventDefault()
        let user = {
            username: username,
            password: password,
            email: email
        }
        console.log(user);
        API.createUser(user)
          .then(res => 
            {console.log(res.data)
            logIn(res.data._id)
        }
          )
          .catch(err => console.log(err));
    }

    function logIn(userId){
        let logUser = {
            username: username,
            userId: userId,
        }
        globalState.setUser(logUser);
        console.log("You've been logged in")
    }

    function checkUser(e){
        e.preventDefault()
        API.checkUser(username)
          .then(res => 
            {console.log(res.data)
            if(res.data.username==username && res.data.password==password){
                logIn(res.data._id);
            }
        }
          )
          .catch(err => console.log(err));
    }

    function renderLogin(){
        if(loginOpen===true){
            return(
                <div>
                    <div className="uk-margin-small">
                        <label className="uk-form-label" htmlFor="username">Username</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="username" placeholder="Username" type = "text" onChange={updateUsername}></input>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <label className="uk-form-label" htmlFor = "password">Password</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="password"  placeholder="Password" type = "password" onChange={updatePassword}></input>
                        </div>
                    </div>
                    <input className="uk-button uk-button-secondary" type = "submit" value = "Log in" onClick={checkUser}></input><br></br>
                    <input type="checkbox" id="keepLogged" name="keepLogged" value="keepLogged"/>
                    <label className="uk-form-label" htmlFor="keepLogged">Keep me logged in</label>
                </div>
            )
        }
    }

    function renderRegister(){
        if(registerOpen===true){
            return(
                <div>
                    <div className="uk-margin-small">
                        <label className="uk-form-label" htmlFor="username">Username</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="username" placeholder="Username" type = "text" onChange={updateUsername}></input>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <label className="uk-form-label" htmlFor="email">Email</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="email" placeholder="Email" type = "text" onChange={updateEmail}></input>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <label className="uk-form-label" htmlFor = "password">Password</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="password" placeholder="Password" type = "password" onChange={updatePassword}></input>
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <label className="uk-form-label" htmlFor = "passwordRpt">Repeat Password</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="passwordRpt" placeholder="Repeat Password" type = "password"></input>
                        </div>
                    </div>
                    <input className="uk-button uk-button-secondary" type = "submit" value = "Register" onClick={registerUser}></input>
                </div>
            )
        }
    }

    function openLogin(){
        setLoginOpen(true);
        setRegisterOpen(false);
    }

    function openRegister(){
        setLoginOpen(false);
        setRegisterOpen(true);
    }

    return(
            <div id="loginForm" className="uk-padding-large uk-margin-large uk-card uk-card-body uk-card-default">
                <button className="uk-button uk-button-secondary uk-width-1-2" onClick={openLogin}>Login</button>
                <button className="uk-button uk-button-secondary uk-width-1-2" onClick={openRegister}>Register</button>
                <form className = "uk-form uk-form-stacked uk-width-1-1">
                    {renderLogin()}
                    {renderRegister()}
                </form>
            </div>
    )
}

export default Login;