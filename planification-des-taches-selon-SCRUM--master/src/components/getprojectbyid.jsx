import { Badge, Button, Descriptions, Form, Input, message, Modal, Result, Select, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deletetache, getproject, getprojects, selectprojects, getprojectbyclient, selectauthedproject, selectproject, selectprojectclient, getprojectbymaster, selectprojectmaster, deleteproject, selectdatachanged } from '../features/project/projectsSlice';
import { gettaches, selectauthedtaches, selecttache, selecttachess } from '../features/tache/tachesSlice';
import { selectusers , getusers, getuser} from '../features/users/usersSlice';
import { CloseCircleOutlined } from '@ant-design/icons';
const { Option } = Select; 

const Projectt = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      }
    const projects = useSelector(selectprojects)
    const dispatch = useDispatch()
    const project = useSelector(selectproject)
    const projectsclient = useSelector(selectprojectclient)
    const tache = useSelector(selecttache)
    const taches = useSelector(selecttachess)
    const projectsmasterr = useSelector(selectprojectmaster)
    const user = useSelector(selectusers)
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
    
    const datachanged = useSelector(selectdatachanged)
    useEffect(() => {    
       // dispatch(getprojects())  
    } , [datachanged]);
/*
    const onFinish = (values) => {     
        console.log('Success:', values);
         let data = {
             project_id : values.project_id ,      
         }
     dispatch(getproject(data))
     console.log("data one project :" + data)
     //dispatch(getprojects(data))
     }
 
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    */
    const erreur = () => {
        message.error('email not valid');
    };
    const onFinish2 = (values) => {     

        console.log('Success:', values);
         let data = {
            email : values.email +"" ,        
         }
         
         //dispatch(getprojects(data))
        dispatch(getprojectbymaster(data))
        console.log("data one project by email :" + data)
     }
 
    const onFinishFailed2 = (errorInfo) => {
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
        {
            title: 'Tache',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (          
                <Select onChange={handleChange}>
                    {
                        record.tache.map((cat, i) => {
                            return (
                                <Option value={cat.id}>
                                    {cat.tache_id} &nbsp;
                                    {cat.tache_name} &nbsp;
                                    {cat.developer} &nbsp;
                                    {cat.date_debut} &nbsp;
                                    {cat.date_fin} &nbsp;
                                    {cat.etat === "en_attend" && <Tag color="red">to do</Tag>}
                                    {cat.etat === "en_cours" && <Tag color="cyan">in progress</Tag>}
                                    {cat.etat === "terminee" && <Tag color="lime">terminated</Tag>} <br></br>                                   
                                </Option>                            
                            )
                        })
                    }
                </Select>
               
            ),
        } ,
        {
            title: 'Tache',
            dataIndex: 'tache_id',
            key: 'tache_id',
            render: (text, record) => (  
                <Select>
                {
                    record.tache.map((cat, i) => {
                        return (
                            <Option value={cat.id}>
                                
                                { <CloseCircleOutlined onClick={() => dispatch(deletetache(cat.tache_id))} style={{ color: 'red', cursor: 'pointer' }} /> }
                                
               </Option>                            
                            )
                        })
                    }
                </Select>
                ),
        } ,
    /* {
            title: 'Tache',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                <Select style={{ margin: '15px 0' }} class="form-select form-select-lg my-3 mb-3" aria-label=".form-select-lg example">
                    <Option selected>shoose email developer</Option>
                    {
                        record.map((cat, i) => {
                            return (
                                <Option value={cat.id_project}>{cat.projectname}</Option>
                            )
                        })
                    }
                </Select>

                    {
                        record.tache.date_debut + 
                        record.tache.developer +
                        record.tache.tache_name+
                        record.tache.etat 
                    } 
    
                </>
            ),
        },
    */
    
];
    
    const onFinish = (values) => {   
       
        let data = {
            project_id : values.project_id ,  
            data : values,
        }
        dispatch(getprojects())
       // dispatch(gettaches(data))
       // dispatch(gettachebydeveloper(data))
        handleCancel() 
        //failed();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish3 = (values) => {   
       
        console.log('Success:', values);
            let data = {
                tache_id : values.tache_id ,      
            }
            dispatch(deletetache(data))
        }
        const onFinishFailed3 = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
return (
    <div className="container" >  
           <div  class="form-group row"  >  
           <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 23,
                  offset:1
              }}
              wrapperCol={{
                  span: 12,
              }}
              initialValues={{
                  remember: true,
                  id : projectsmasterr.id ,
                  project_id : projectsmasterr.project_id ,
                  tache_id : projectsmasterr.tache_id ,
                  email : projectsmasterr.email ,
                  tache : projectsmasterr.tache ,
                  //tache_id : tache.tache_id ,
                  //id : tache.id ,
              }}
              onFinish={onFinish3}
              onFinishFailed={onFinishFailed3}
          >      
            <Form.Item
                  label="Delete Tache By Id "
                  name="tache_id"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your tache_id !',
                      },
                  ]}
              >
                    <Select>
                    { tache !== undefined ? 
                        tache.map((cat, i) => {
                            return (
                                <Option value={cat.tache_id}>                    
                                    {cat.tache_name} &nbsp;      
                                </Option>                             
                            )
                        })
                        :  <Result
                            status="500"
                            title="No data"
                            // subTitle="Sorry, something went wrong."
                            extra={<Button type="primary" href="/Home">Back Home</Button>}
                            />
                    }
                    </Select>
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 15,
                      span: 11,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      Delete 
                  </Button>
                  </Form.Item>
          </Form>
          <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 10,
                  offset:3
              }}
              wrapperCol={{
                  span: 14,
              }}
              initialValues={{
                  remember: true,
                  email : user.email /* ? user.email : <Result
                    status="500"
                    title="500"
                    subTitle="Sorry, something went wrong."
                    extra={<Button type="primary">Back Home</Button>}
                    />, */
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
                  <Form.Item
                  label="get Project"
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email !',

                      },
                  ]}
              >
                  <Input defaultValue={user.email} disabled />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 13,
                      span: 15,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      See
                  </Button>
                  </Form.Item>
          </Form>  
          </div>
          <div>
         
         {projectsmasterr !== undefined ?  
                    ( <h2>Projects <Badge count={projectsmasterr.length} showZero /> </h2>
                         &&
                        <Table columns={columns} dataSource={projectsmasterr} /> 
                    )
                           
                    :  <Result
                    status="500"
                    title="No data"
                   // subTitle="Sorry, something went wrong."
                    extra={<Button type="primary" href="/Home">Back Home</Button>}
                  />
                }
        </div>
          <br></br>
          <Modal footer={null} title="Show Taches" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                           email : projectsmasterr.email ,
                           //tache_id : tache.tache_id,
                           //etat : tache.etat ,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                         <Form.Item
                           label="project_id"
                            name="project_id"
                           // rules={[{ required: true, message: 'Please input your project_id !' }]}
                        >
                            <Input defaultValue={projectsmasterr.project_id}/>
                        </Form.Item>
                        <Form.Item
                           label="tache_id"
                            name="tache_id"
                           // rules={[{ required: true, message: 'Please input your tache_id !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label=" etat"
                            name="etat"
                            //rules={[{ required: true, message: 'Please input your etat !' }]}
                        >
                            <Input />
                        </Form.Item>
                       
                    </Form>
                
               
            </Modal>
        </div>
        
    ) 
} ;

export default Projectt
