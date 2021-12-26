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
import ListUsers from './components/listeusers';
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


function App() {
  return (
    <div >
        <Router>
          <Navbar /> 
          <Switch>
          <PublicRoute restricted={false} path='/Home' component={Home} ></PublicRoute>
            
          <PrivateRoute path="/Addtache" roles={["scrum_master"]} component={Addtache} />
          <PrivateRoute path="/Addproject" roles={["admin"]} component={Addproject} />
          <PrivateRoute path="/taches" roles={["scrum_master"]} component={Taches} />
         
          <PrivateRoute path="/project" roles={["admin"]} component={Projectt} />
          <PrivateRoute path="/userbyemail" roles={["admin"]} component={Userr} />
          <PrivateRoute path="/updateDev" roles={["admin"]} component={updateDevelopper} />
          <PrivateRoute path="/updatePro" roles={["admin"]} component={UpdateProject} />

          <PrivateRoute path="/updateUser" roles={["admin"]} component={UpdateUsers} />
          <PrivateRoute path="/ListT" roles={["admin"]} component={ListTaches} />
          <PublicRoute restricted={false} path='/listUsers' component={ListUsers} ></PublicRoute>
 
          <PrivateRoute path="/listProjects" roles={["admin"]} component={ListProjects} />
           
            <PublicRoute restricted={false} path='/Register' component={Register} ></PublicRoute>
            <PublicRoute restricted={false} path='/Auth' component={Auth} ></PublicRoute>
            
            <Route path="/card" component={card} />
            <Route path="/Addmaster" component={Addmaster} />

            <PublicRoute restricted={false} path='/' component={Home} ></PublicRoute>
            </Switch>    
       </Router>
    </div>
  );
}

export default App;
