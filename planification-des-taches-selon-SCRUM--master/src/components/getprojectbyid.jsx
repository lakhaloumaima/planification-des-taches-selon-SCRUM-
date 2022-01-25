import { Badge, Button, Descriptions, Form, Input, message, Modal, Result, Select, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getprojects, selectprojects, selectproject, selectprojectclient, getprojectbymaster, selectprojectmaster, deleteproject, selectdatachanged, deletetache } from '../features/project/projectsSlice';
import {  selecttache, selecttachess } from '../features/tache/tachesSlice';
import { selectusers } from '../features/users/usersSlice';
import { CloseCircleOutlined , EditOutlined} from '@ant-design/icons';
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
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [tache_id, setid] = useState('');
    const showModal2 = (tachee) => {
        setid(tachee.tache_id)
        setIsModalVisible2(true);
    };

    const handleOk2 = () => {
        setIsModalVisible2(false);
    };
    const handleCancel2 = () => {
        setIsModalVisible2(false);
    };
    const onFinish3 = (values) => {   
       
        console.log('Success:', values);
            let data = {
                tache_id : values.tache_id ,      
            }
            dispatch(deletetache(data))
            handleCancel2()
            setIsModalVisible2(false)
            success()
     }
     const onFinishFailed3 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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
        dispatch(getprojects())  
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
                <Select onChange={handleChange} style={{marginRight:'50px'}}>
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
     /*   {
            title: 'Delete',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => ( 
               // <li><a onClick={() => showModal2(record)} ><EditOutlined style={{ color: 'green', cursor: 'pointer' }} /></a></li>    
               <Select onChange={handleChange} style={{marginRight:'50px'}}>
               {
                   record.tache.map((cat, i) => {
                       return (
                           <Option value={cat.id}>
                               
                               <a onClick={() => deletetache(cat.tache_id)} ><EditOutlined style={{ color: 'green', cursor: 'pointer' }} /></a>    
                             
                           </Option>                            
                       )
                   })
               }
           </Select>
            ),
        } , */
    
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
    const success = () => {
        message.success('tache successfuly deleted');
    };
   
return (
    <div className="container" >  
           <div  class="form-group row"  >  
         
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
                  label="get Projects"
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
         
         {(projectsmasterr !== undefined) && (projectsmasterr !== null) ?  
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
     
        </div>
        
    ) 
} ;

export default Projectt
