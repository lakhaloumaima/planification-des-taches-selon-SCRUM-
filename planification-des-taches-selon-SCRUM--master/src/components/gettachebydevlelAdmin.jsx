import { Badge, Button, Descriptions, Form, Input, message, Modal, Result, Select, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { gettachebydeveloper, selecttache, selecttachedev, selecttachess } from '../features/tache/tachesSlice';
import { getprojects, selectproject, selectprojects ,deletetache, selectdatachanged } from '../features/project/projectsSlice';
import {  selectusers, selectuserss} from '../features/users/usersSlice';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const GettachebydevlelAdmin = () => {
    const project = useSelector(selectproject)
    const taches = useSelector(selecttachess)
    const dispatch = useDispatch()
    const tache = useSelector(selecttache)
    const user = useSelector(selectusers)
    
    const tachedev = useSelector(selecttachedev)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const projects = useSelector(selectprojects)
   // const users = useSelector(selectuserss)
   const datachanged = useSelector(selectdatachanged)
   const showModal2 = (tachee) => {
        setid(tachee.tache_id)
        setIsModalVisible2(true);
    };
    const [tache_id, setid] = useState('');

    const handleOk2 = () => {
        setIsModalVisible2(false);
    };
    const handleCancel2 = () => {
        setIsModalVisible2(false);
    };
    const erreur = () => {
        message.error('email not valid ');
    };
    useEffect(() => {    
        dispatch(getprojects())  
    } , [datachanged]);
    const users = useSelector(selectuserss)
    const onFinish2 = (values) => {
        console.log('Success:', values);
        let data = { 
            email :values.email ? values.email +"" : erreur() ,    
        }
       // dispatch(getuser(data))
       // dispatch(getuser(data))
        //dispatch(getprojects())
        dispatch(gettachebydeveloper(data))
        console.log("tache by de : " + data)
        
    }; 
  
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const success = () => {
        message.success('tache successfuly deleted');
    };
    const onFinish = (values) => {   
       
        console.log('Success:', values);
            let data = {
                tache_id : values.tache_id ,      
            }
            dispatch(deletetache(data))
            handleCancel2()
            setIsModalVisible2(false)
            success()
        }
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
    const columns = [
        
        {
            title: 'Id tache',
            dataIndex: 'tache_id',
            key: 'tache_id',
            render: (text, record) => (
                <>
                    {record.tache_id} <br></br>
                    
    
                </>
            ),
        },
        {
            title: 'Date_debut',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <> 
              { record.date_debut }
                  
                    
                <br></br>
    
                </>
            ),
        },
        {
            title: 'Date_fin',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                    {record.date_fin} <br></br>
                    
                    
    
                </>
            ),
        },
        {
            title: 'Developer Name',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                    
                    {record.developer} <br></br>
                    
                </>
            ),
        },
        {
            title: 'Tache Name',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                   
                    {record.tache_name} <br></br>
                    
    
                </>
            ),
        },
        {
            title: 'Etat',
            dataIndex: 'etat',
            key: 'etat',
            render: (text, record) => (
                <>
                   
                
                {record.etat === "en_attend" && <Tag color="red">to do</Tag>}
                {record.etat === "en_cours" && <Tag color="cyan">in progress</Tag>}
                {record.etat === "terminee" && <Tag color="lime">terminated</Tag>} <br></br>
          
                    
    
                </>
            ),
        },
        {
            title: 'Project Name',
            dataIndex: 'project_name',
            key: 'project_name',
            render: (text, record) => (
                <>
                   
                    {record.project_name} <br></br>
                    
    
                </>
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) => (
              
                <CloseCircleOutlined onClick={() => showModal2(record)} style={{ color: 'red', cursor: 'pointer' }} />
                
            ),
        },
    
    ];
return (
    <div className="container" >  
          <div class="form-group row">
   
          <Form
            style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 16,
                  offset:0
              }}
              wrapperCol={{
                  span: 10,
              }}
              initialValues={{
                  remember: true,
                  //id : tache.id 
                 // email :users.email
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
            
            <Form.Item
                  label="Get Tache By developer "
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email !',
                      },
                      {type : 'email'}
                  ]}
              >
                  <Select style={{marginLeft:'50px' }}>
                    { (users !== undefined  ) ? 
                        users.map((cat, i) => {
                            return (
                                
                                <Option value={cat.email}>                    
                                    {cat.email} &nbsp;      
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
                      offset: 10,
                      span: 10,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      See 
                  </Button>
                  </Form.Item>
          </Form>

          </div>
          <div> 
          <h2>Taches by developer</h2>
        <Table columns={columns} dataSource={tache} />
          </div>
          <Modal footer={null} title="Delete Tache" visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            remember: true,
                            email : users.email , 
                            tache_id :tache_id ,
                           
                            //id : users.id
                         }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        
                        <Form.Item
                           label="tache_id"
                            name="tache_id"
                            rules={[{ required: true, message: 'Please input your tache_id !' }]}
                        >
                            <Input disabled />
                        </Form.Item>
                        
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Delete
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
           
        </div>
        
    ) 
} ;

export default GettachebydevlelAdmin
