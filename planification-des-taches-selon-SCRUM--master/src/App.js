import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Addmaster from './components/Addmaster';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Addproject from './components/Addproject';

import Addtache from './components/Addtache';
import updateDevelopper from './components/updateDevelopper';
import ListUsers from './components/ListeUsers'
import ListProjects from './components/ListProjects';
import ListTaches from './components/listTaches';
import Register from './components/register';
import Auth from './components/auth';
import Taches from './components/gettachebyid';
import Projectt from './components/getprojectbyid';
import Userr from './components/getuserbyemail';
import UpdateProject from './components/updateproject';
import UpdateUsers from './components/updateuser';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import ListsProjects from './components/listeprojetleluser';
import gettachebydevlelAdmin from './components/gettachebydevlelAdmin';


function App() {
  return (
    <div >
        <Router>
          <Navbar /> 
          <Switch>
          <PublicRoute restricted={false} path='/Home' component={Home} ></PublicRoute>

          <PrivateRoute path="/updatePro" roles={["admin"]} component={UpdateProject} />          
          <PrivateRoute path="/listUsers" roles={["admin"]} component={ListUsers} />       
          <PrivateRoute path="/listProjects" roles={["admin"]} component={ListProjects} />
          <PrivateRoute path="/updateDev" roles={["admin"]} component={updateDevelopper} />
          <PrivateRoute path="/updateUser" roles={["admin"]} component={UpdateUsers} />
         
          <PrivateRoute path="/userbyemail" roles={["client","scrum_master","developer"]} component={Userr} />

          <PrivateRoute path="/project" roles={["scrum_master"]} component={Projectt} />
          <PrivateRoute path="/Addtache" roles={["scrum_master"]} component={Addtache} />
          <PrivateRoute path="/Addtache" roles={["scrum_master"]} component={Addtache} />
          <PrivateRoute path="/ListT" roles={["scrum_master"]} component={ListTaches} />
          
          <PrivateRoute path="/ListTacheDev" roles={["admin"]} component={gettachebydevlelAdmin} />
          <PrivateRoute path="/taches" roles={["developer"]} component={Taches} />

          <PrivateRoute path="/listspr" roles={["client"]} component={ListsProjects} />
          <PrivateRoute path="/Addproject" roles={["client"]} component={Addproject} />
        
          <PublicRoute restricted={false} path='/Register' component={Register} ></PublicRoute>
          <PublicRoute restricted={false} path='/Auth' component={Auth} ></PublicRoute>
            

            <PublicRoute restricted={false} path='/' component={Home} ></PublicRoute>
            </Switch>    
       </Router>
    </div>
  );
}

export default App;
