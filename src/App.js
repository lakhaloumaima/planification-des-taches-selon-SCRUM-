import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Addmaster from './components/Addmaster';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Addproject from './components/Addproject';
import card from './components/card';
import Addtache from './components/Addtache';
import updateDevelopper from './components/updateDevelopper';
import ListUsers from './components/ListeUsers';
import ListProjects from './components/ListProjects';
import ListTaches from './components/listTaches';
import Register from './components/register';
import Auth from './components/auth';
import ListDevelopper from './components/listDevelopper';

function App() {
  return (
    <div >
        <Router>
          <Navbar /> 
          <Switch>
           
            <Route path="/Home" component={Home} /> 
            <Route path="/Addmaster" component={Addmaster} />
            <Route path="/Addproject" component={Addproject} />
            <Route path="/Addtache" component={Addtache} />
            
            
            <Route path="/listD" component={ListDevelopper} />
            <Route path="/updateDev" component={updateDevelopper} />
            <Route path="/card" component={card} />
            <Route path="/ListT" component={ListTaches} />
            <Route path="/listUsers" component={ListUsers} />
            <Route path="/listProjects" component={ListProjects} />
            <Route path="/Register" component={Register} />
            <Route path="/Auth" component={Auth} />

            <Route path="/" component={Home} /> 
            </Switch>    
       </Router>
    </div>
  );
}

export default App;
