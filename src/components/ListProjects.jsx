import { Badge, Table, Space , Button , Form , Input , Modal, Descriptions } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproject, getprojectbyclient, getprojects,  selectdatachanged,  selectproject,  selectprojects } from '../features/project/projectsSlice';
import { CloseCircleOutlined , EditOutlined } from '@ant-design/icons';
import { selectauthedtaches, updatetaches } from '../features/tache/tachesSlice';
import { getuser } from '../features/users/usersSlice';



const ListProjects = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
    const project = useSelector(selectproject)
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
    const onFinish = (values) => {     
        console.log('Success:', values);
         let data = {
             email : values.email , 
             project_id : values.project_id,     
         }
         dispatch(getprojectbyclient(data))
         dispatch(getuser(data))        
      
     console.log("data one project by email :" + data)
     //dispatch(getprojects(data))
     }
 
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
            <Space >
                
               
                <EditOutlined onClick={() => dispatch(showModal())} style={{ color: 'green', cursor: 'pointer' }} />
                
                 </Space>
        ),
    },

];

const columns2 = [
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
        <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 15,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
          >   
              
            
            <Form.Item
                  label="get Project By email "
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 7,
                      span: 15,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      See 
                  </Button>
                  </Form.Item>
          </Form>
        <Table columns={columns2} dataSource={project} />
        <br></br>
        
    </div>
)

}
export default ListProjects