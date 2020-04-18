import React,{Component} from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/home";
import Login from "./pages/login";
import ListSelect from "./pages/listSelect";
import ListBuild from "./pages/listBuild";
import FactionSelect from "./pages/factionSelect";
import SubFactionSelect from "./pages/subFactionSelect";
import About from "./pages/about";
import GlobalState from "./utils/GlobalState"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App(){
  return (
    <GlobalState.Provider state = {GlobalState}>
      <Router>
      <div className="App">
        <Navbar/>
        <div className = "content">
          <Switch>
              <Route exact path= "/" component = {Home}/>
              <Route exact path= "/about" component = {About}/>
              <Route exact path= "/login" component = {Login}/>
              <Route exact path="/listSelect" component = {ListSelect}/>
              <Route exact path="/newlist/buildList/new" component = {FactionSelect}/>
              <Route path="/buildList/:id" component = {ListBuild}/>
              <Route  path="/newlist/buildList/:id" component = {ListBuild}/>
              <Route  path="/newlist/:faction" component = {SubFactionSelect}/>
          </Switch>
        </div>
      <Footer/>
      </div>
      </Router>
    </GlobalState.Provider>
  );
}

export default App;
