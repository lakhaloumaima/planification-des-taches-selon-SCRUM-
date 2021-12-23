import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Addtache = () => {
     
           


return (
    <div className="container" style={{ backgroundColor:"steelblue" }}  >
        <div  > <center><br></br>
          <h3>Add Tache </h3> 
          </center><br></br>
        <form>
        <div className="form-group">
    <label htmlFor="exampleInputPassword1">Project id  </label>
    <select class="form-control form-control-lg">
  <option>----</option>
  <option>oumeyma</option>
  <option>mokhles</option>
  <option>mohamed</option>
</select><br></br>
  </div>
<div className="form-group">
    <label htmlFor="exampleInputPassword1">Developer id </label>
    <select class="form-control form-control-lg">
  <option>----</option>
  <option>oumeyma</option>
  <option>mokhles</option>
  <option>mohamed</option>
</select><br></br>
  </div>
 
 
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Date debut </label>
    <input type="date" className="form-control" id="nameM" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Date fin </label>
    <input type="date" className="form-control" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Etat  </label>
    <select class="form-control form-control-lg">
  <option>----</option>
  <option>to do</option>
  <option>in progress</option>
  <option>finished</option>
</select><br></br>
  </div>

   <br /> <center>
  <button type="button" className="btn btn-light"> Add </button>
  </center>
</form>

<br></br>

 
    </div>
    </div>
)
};


export default Addtache


