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
            
          <PublicRoute restricted={false} path='/Addtache' component={Addtache} ></PublicRoute>

          <PublicRoute restricted={false} path='/Addproject' component={Addproject} ></PublicRoute>

          <PublicRoute restricted={false} path='/updatePro' component={UpdateProject} ></PublicRoute>
          <PublicRoute restricted={false} path='/updateDev' component={updateDevelopper} ></PublicRoute>
          <PublicRoute restricted={false} path='/userbyemail' component={Userr} ></PublicRoute>
          <PublicRoute restricted={false} path='/project' component={Projectt} ></PublicRoute>
          <PublicRoute restricted={false} path='/Addtache' component={Addtache} ></PublicRoute>
          <PublicRoute restricted={false} path='/updateUser' component={UpdateUsers} ></PublicRoute>


           <PublicRoute restricted={false} path='/listUsers' component={ListUsers} ></PublicRoute>
          <PublicRoute restricted={false} path='/ListT' component={ListTaches} ></PublicRoute>
          
          <PublicRoute restricted={false} path='/listProjects' component={ListProjects} ></PublicRoute>
          <PublicRoute restricted={false} path='/taches' component={Taches} ></PublicRoute>

            <PublicRoute restricted={false} path='/Register' component={Register} ></PublicRoute>
            <PublicRoute restricted={false} path='/Auth' component={Auth} ></PublicRoute>
            

            <PublicRoute restricted={false} path='/' component={Home} ></PublicRoute>
            </Switch>    
       </Router>
    </div>
  );
}

export default App;
