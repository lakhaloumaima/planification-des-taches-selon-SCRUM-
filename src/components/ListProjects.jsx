import { Badge, Table, Space } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproject, getprojects,  selectdatachanged,  selectprojects } from '../features/project/projectsSlice';
import { CloseCircleOutlined } from '@ant-design/icons';



const ListProjects = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
  const datachanged = useSelector(selectdatachanged)

    useEffect(() => {
            dispatch(getprojects())
    }, [datachanged]);

    const addproject  = () => {
        window.location.href = '/Addproject'
       
    }

 const columns = [
    {
        title: 'ID Project ',
        dataIndex: 'id',
        key: 'id',
        render: (text, record) => (
            <>
                {record.id}
               
            </>
        ),
    },
    {
        title: 'Project Name',
        dataIndex: 'projectname',
        key: 'projectname',
        render: (text, record) => (
            <>
                {record.projectname}
            </>
        ),
    },
   
    {
        title: 'Client Name',
        dataIndex: 'client',
        key: 'client',
        render: (text, record) => (
            <>
                {record.client}
            </>
        ),
    },
    {
        title: 'Scrum Master',
        dataIndex: 'scrum_master',
        key: 'scrum_master',
        render: (text, record) => (
            <>
                {record.scrum_master}
            </>
        ),
    },
    {
        title: 'Date Debut',
        dataIndex: 'date_debut',
        key: 'date_debut',
        render: (text, record) => (
            <>
                {record.date_debut}
            </>
        ),
    },
    {
        title: 'Date Fin',
        dataIndex: 'date_fin',
        key: 'date_fin',
        render: (text, record) => (
            <>
                {record.date_fin}
            </>
        ),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text, record) => (
            <>
                {record.description}
            </>
        ),
    },
   /* {
        title: 'Tache',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].date_debut} <br></br>
                {record.tache[0].developer} <br></br>
                {record.tache[0].tache_name} <br></br>
                {record.tache[0].etat} <br></br>

            </>
        ),
    },
   */
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                
               
                <CloseCircleOutlined onClick={() => dispatch(deleteproject())} style={{ color: 'red', cursor: 'pointer' }} />
                
                 </Space>
        ),
    },

];
return (
    <div className="container"  >
         <div> 
          <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={addproject}>
        Add Master
      </button> 
          </div> <br></br>
        <h2>Projects <Badge count={projects.length} showZero /> </h2>
        <Table columns={columns} dataSource={projects} />
        <br></br>
         
    </div>
)

}
export default ListProjects