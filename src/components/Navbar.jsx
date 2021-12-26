import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout, selectautheduser, selectisauth, selectusers } from '../features/users/usersSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  const isauth = useSelector(selectisauth)
  const user = useSelector(selectusers)
//  const user = useSelector(selectautheduser)
    
  const PrivateNavItemByRole = ({ url, text, roles }) => {
    if (isauth && roles.includes(user.roll)) {
        return <li><a href={url} >{text}</a></li>
    } else {
        return null
    }
}
    return (
       <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  { <a className="navbar-brand" href="/Home"><i class="glyphicon glyphicon-home"></i> Home</a>}
  {isauth && user.roll ==="admin" && <a className="navbar-brand" href="/listUsers"><i class="glyphicon glyphicon-home"></i> List Users</a>}
  {isauth && user.roll ==="admin" && <a className="navbar-brand" href="/updateUser"><i class="glyphicon glyphicon-home"></i> update users</a>}
  {isauth && user.roll ==="scrum_master"  && <a className="navbar-brand" href="/listProjects"><i class="glyphicon glyphicon-home"></i> List Projects</a>}
  {isauth && user.roll ==="scrum_master" && <a className="navbar-brand" href="/ListT"><i class="glyphicon glyphicon-home"></i>List Taches</a>}
  {isauth && ( user.roll ==="scrum_master" || user.roll ==="developer" )&& <a className="navbar-brand" href="/taches"><i class="glyphicon glyphicon-home"></i>Tache</a>}
  {isauth  && user.roll ==="scrum_master" && <a className="navbar-brand" href="/project"><i class="glyphicon glyphicon-home"></i>Project</a>}
  {isauth && user.roll ==="admin"&& <a className="navbar-brand" href="/userbyemail"><i class="glyphicon glyphicon-home"></i>User</a>}
  {isauth && user.roll ==="scrum_master" && <a className="navbar-brand" href="/updatePro"><i class="glyphicon glyphicon-home"></i>update project</a>}
  {isauth && user.roll ==="admin" && <a className="navbar-brand" href="/updateDev"><i class="glyphicon glyphicon-home"></i>update dev</a>}

 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">  
        <li className="nav-item">
          {isauth && <li onClick={() => dispatch(logout())} ><a><i class="fa fa-lock"></i> logout</a></li>}
    
        </li>        
      </ul>
      {!isauth && <a className="navbar-brand" href="/Auth"><i class="fa fa-lock"></i> Sign in</a>}
      {!isauth && <a className="navbar-brand" href="/Register"><i class=" glyphicon glyphicon-registration-mark"></i> Sign up</a>}
                                  
      <form className="form-inline my-2 my-lg-4">
            <i class="fa fa-facebook"></i>
           <br></br> &nbsp;&nbsp;
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <br></br> &nbsp;&nbsp;
            <i class="fa fa-twitter" aria-hidden="true"></i>
        </form>
        
    </div>
  </nav>
</div>

    )
}
export default Navbar