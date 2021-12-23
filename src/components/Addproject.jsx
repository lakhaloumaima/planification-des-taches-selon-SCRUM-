import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Descriptions, message } from 'antd';
import { createproject, getprojects, selectaddstatus } from '../features/project/projectsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Addproject = () => {

  const dispatch = useDispatch()
  const addstatus = useSelector(selectaddstatus)

  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [date_debut, setdated] = useState('');
  const [date_fin, setdatef] = useState('');
  const [emailclient, setemailc] = useState('');
  const [emailmaster, setemailm] = useState('');

  useEffect(() => {
    dispatch(getprojects())
}, [addstatus]);


const success = () => {
    message.success('project successfuly created');
};

const error = () => {
    message.error('project not created');
};


const addProject = () => {
 /* const data = {
    name: project.name,
    total_price: total,
    products: getproductstable()
}

    dispatch(createproject(data))
    console.log(data)
    success()

    //window.location.href = '/listProjects'
   */
    const data = new FormData()
    data.append('projectname', name)
    data.append('description', description)
    data.append('date_debut', date_debut)
    data.append('date_fin', date_fin)
    data.append('emailclient', emailclient)
    data.append('emailmaster', emailmaster)
    console.log(data)
    dispatch(createproject(data))
    console.log(data)
    success()

    //window.location.href = '/listProjects'

}
           
return (
    <div className="container" style={{ backgroundColor:"steelblue" }} >
        <div  > <center><br></br>
          <h3>Add Project </h3> 
          </center><br></br>
        <form>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Project Name </label>
    <input value={name} onChange={(e) => setname(e.target.value)}  type="text" className="form-control" />
  </div>
  <div className="form-group">
      <label htmlFor="exampleInputPassword1">Email Master  </label>
      <input value={emailmaster} onChange={(e) => setemailm(e.target.value)}  type="text" className="form-control" />       
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Description </label>
    <input value={description} onChange={(e) => setdescription(e.target.value)} type="text" className="form-control" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Date debut </label>
    <input value={date_debut} onChange={(e) => setdated(e.target.value)} type="date" className="form-control" id="nameM" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Date fin </label>
    <input value={date_fin} onChange={(e) => setdatef(e.target.value)} type="date" className="form-control" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Email Client</label>
    <input value={emailclient} onChange={(e) => setemailc(e.target.value)} type="text" className="form-control" id="nameM" />
  </div> <br /> <center>
  <button onClick={() => addProject()} type="button" className="btn btn-light"> Add </button>
  </center>
</form>

<br></br>

 
    </div>
    </div>
)
};


export default Addproject 


