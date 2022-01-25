import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout, selectisauth, selectusers } from '../features/users/usersSlice';
import { HomeOutlined , OrderedListOutlined,UserOutlined , ContainerOutlined , FileAddOutlined , EditOutlined , LogoutOutlined} from '@ant-design/icons';
const Navbar = () => {
  const dispatch = useDispatch()
  const isauth = useSelector(selectisauth)

    //const user = useSelector(selectautheduser)
  const user = useSelector(selectusers)

    
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
  
   <a className="navbar-brand" href="/Home"><HomeOutlined /> Home</a>
   {isauth && ( user.roll ==="scrum_master" || user.roll ==="developer" || user.roll ==="client" ) && <a className="navbar-brand" href="/userbyemail"><UserOutlined />Profile</a>}

  {isauth &&  user.roll ==="admin" && <a className="navbar-brand" href="/listUsers"><ContainerOutlined /> List Users</a>}

  { isauth && user.roll ==="admin"  && <a className="navbar-brand" href="/listProjects"><ContainerOutlined /> List Projects</a>}
  {isauth &&  user.roll ==="scrum_master" && <a className="navbar-brand" href="/ListT"><ContainerOutlined /> List Taches</a>}
  {isauth && user.roll ==="developer" && <a className="navbar-brand" href="/taches"><OrderedListOutlined />Taches</a>}
  {isauth && user.roll ==="scrum_master" && <a className="navbar-brand" href="/project"><ContainerOutlined />Projects</a>}
  
  {isauth &&  user.roll ==="admin" && <a className="navbar-brand" href="/ListTacheDev"><ContainerOutlined /> List Taches</a>}
 
  {isauth && user.roll ==="client" && <a className="navbar-brand" href="/Addproject"><FileAddOutlined /> Add Project</a>}
  {isauth && user.roll ==="client" && <a className="navbar-brand" href="/listspr"><ContainerOutlined /> ProjectsClient </a>}

 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">  
        <li className="nav-item">
          {isauth && <li onClick={() => dispatch(logout())} ><a><LogoutOutlined /> logout</a></li>}
    
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