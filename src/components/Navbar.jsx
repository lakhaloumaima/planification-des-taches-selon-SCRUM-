import React from 'react';

const Navbar = () => {

    return (
       <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/Home">Home</a>
    

    <a className="navbar-brand" href="/ListD">List developpers</a>
    <a className="navbar-brand" href="/ListT">List Taches</a>
    <a className="navbar-brand" href="/listUsers">List Users</a>
    <a className="navbar-brand" href="/listProjects">List Projects</a>
    <a className="navbar-brand" href="/updateDev"> update dev</a>

    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">  
        <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
        </li>        
      </ul>
      
    <a className="navbar-brand" href="/Auth"> Sign in </a>
    <a className="navbar-brand" href="/Register"> Sign up </a>
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