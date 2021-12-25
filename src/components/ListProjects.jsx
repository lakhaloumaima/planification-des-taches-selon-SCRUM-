import { Badge, Table, Space , Button , Form , Input , Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproject, getprojects,  selectdatachanged,  selectprojects } from '../features/project/projectsSlice';
import { CloseCircleOutlined , EditOutlined } from '@ant-design/icons';
import { selectauthedtaches, updatetaches } from '../features/tache/tachesSlice';



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

    const tache = useSelector(selectauthedtaches)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

/*
    const onFinish2 = (values) => {
        console.log('Success:', values);

        let data = {
            tache_id : tache.tache_id,
            //date_debut : tache.date_debut ,
            //tache_id : values.tache_id ,  
            data : values,
        }
        dispatch(updatetaches(data))
        console.log(data)
        setIsModalVisible(false)
        //window.location.reload()
    }; 
  
    
const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

*/

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
    {
        title: 'Update',
        key: 'update',
        render: (text, record) => (
            <Space size="middle">
                
               
                <EditOutlined onClick={() => dispatch(showModal())} style={{ color: 'green', cursor: 'pointer' }} />
                
                 </Space>
        ),
    },

];
return (
    <div className="container"  >
         <div> 
          <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={addproject}>
        Add Project
      </button> 
          </div> <br></br>
        <h2>Projects <Badge count={projects.length} showZero /> </h2>
        <Table columns={columns} dataSource={projects} />
        <br></br>
        
    </div>
)

}
export default ListProjects