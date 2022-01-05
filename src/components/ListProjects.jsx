import { Badge, Table, Space , Button , Form , Input , Modal, Descriptions } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproject, getproject, getprojectbyclient, getprojects,  selectdatachanged,  selectproject,  selectprojects, updateproject } from '../features/project/projectsSlice';
import { CloseCircleOutlined , EditOutlined } from '@ant-design/icons';
import { selectauthedtaches, updatetaches } from '../features/tache/tachesSlice';
import { getuser, selectseletestatus } from '../features/users/usersSlice';



const ListProjects = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
    const project = useSelector(selectproject)
  const datachanged = useSelector(selectdatachanged)
    useEffect(() => {
            dispatch(getprojects())
    }, [datachanged]);

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
    const onFinish2 = (values) => {
        console.log('Success:', values);
    
        let data = {
            id_project : values.id_project ,
        }
        dispatch(deleteproject(data))
       // window.location.reload()
        
    };
    
      const onFinishFailed2 = (errorInfo) => {
          console.log('Failed:', errorInfo);
      };
    /*
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
*/
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

    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            id : values.id ,
            project_id : values.project_id,
            projectname : values.projectname,
            description : values.description ,
            date_debut : values.date_debut ,
            date_fin : values.date_fin ,
            emailclient : values.emailclient ,
            emailmaster : values.emailmaster ,
            data : values ,
        }
        dispatch(getproject(data))
        dispatch(getprojects(data))
        dispatch(updateproject(data))

        handleCancel()
        // window.location.reload()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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
    /* {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">         
                <CloseCircleOutlined onClick={() => dispatch(deleteproject(record.id))} style={{ color: 'red', cursor: 'pointer' }} /> 
            </Space>
        ),
    },
    */
    {
        title: 'Update',
        key: 'update',
        render: (text, record) => (
            
            <li><a onClick={() => showModal()} ><EditOutlined  style={{ color: 'green', cursor: 'pointer' }}/></a></li>
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
  <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 11,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
                  <Form.Item
                  label="Delete Project By id"
                  name="id_project"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your id_project !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 7,
                      span: 11,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      Delete
                  </Button>
                  </Form.Item>
          </Form>  
        <h2>Projects <Badge count={projects.length} showZero /> </h2>
        <Table columns={columns} dataSource={projects} />
        <Modal footer={null} title="Update projects" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                        id : projects.id ,
                         project_id : projects.project_id , 
                         projectname : projects.projectname,
                         description : projects.description ,
                        date_debut : projects.date_debut ,
                        date_fin : projects.date_fin ,
                        emailclient : projects.emailclient ,
                        emailmaster : projects.emailmaster ,
                            
                         }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                         <Form.Item
                           label="project_id"
                            name="project_id"
                            rules={[{ required: true, message: 'Please input your project_id!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="project_name"
                            name="projectname"
                            rules={[{ required: true, message: 'Please input your projectname!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="date_debut"
                            name="date_debut"
                            rules={[{ required: false, message: 'Please input your date_debut!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="date_fin"
                            name="date_fin"
                            rules={[{ required: false, message: 'Please input your date_fin!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="description"
                            name="description"
                            rules={[{ required: false, message: 'Please input your description!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="emailclient"
                            name="emailclient"
                            rules={[{ required: false, message: 'Please input your emailclient!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="emailmaster"
                            name="emailmaster"
                            rules={[{ required: false, message: 'Please input your emailmaster!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        <br></br>
        
    </div>
)

}
export default ListProjects