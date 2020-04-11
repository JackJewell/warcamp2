import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/home";
import ListSelect from "./pages/listSelect";
import ListBuild from "./pages/listBuild";
import FactionSelect from "./pages/factionSelect";
import SubFactionSelect from "./pages/subFactionSelect";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className = "content">
        <Switch>
            <Route exact path= "/" component = {Home}/>
            <Route exact path= "/about" component = {About}/>
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
  );
}

export default App;
