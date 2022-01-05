import { Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import tachesSlice, { gettachebydeveloper, gettaches, selectauthedtaches , selecttache, selecttachess, updatetache, updatetaches} from '../features/tache/tachesSlice';
import { getprojects, selectproject, selectprojects } from '../features/project/projectsSlice';
import {getuser, getusers, selectusers} from '../features/users/usersSlice';


const Taches = () => {
    const project = useSelector(selectproject)
    const taches = useSelector(selecttachess)
    const dispatch = useDispatch()
    const tache = useSelector(selecttache)
    const user = useSelector(selectusers)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const projects = useSelector(selectprojects)

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };


    useEffect(() => {    
        dispatch(getprojects())  
    } , []);

    const onFinish2 = (values) => {
        console.log('Success:', values);
        let data = { 
            email : values.email,    
        }
        dispatch(getuser(data))
        dispatch(getprojects())
        dispatch(gettachebydeveloper(data))
        console.log("tache by de : " + data)
        
    }; 
  
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values) => {   
       
        let data = {
            tache_id : values.tache_id ,  
            data : values,
        }
       // dispatch(gettachebydeveloper(data))
        dispatch(updatetache(data))
        handleCancel() 
        //failed();
    };
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
                   
                
                {record.etat === "en_attente" && <Tag color="red">to do</Tag>}
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
            title: 'Update',
            dataIndex: 'Update',
            key: 'Update',
            render: (text, record) => (
                <>
                   
                   <li><a onClick={() => showModal()} ><EditOutlined style={{ color: 'green', cursor: 'pointer' }} /></a></li>
    
                </>
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
                  span: 15,
                  offset:0
              }}
              wrapperCol={{
                  span: 10,
              }}
              initialValues={{
                  remember: true,
                  email : user.email
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
            
            <Form.Item
                  label="email get Tache By developer "
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email !',
                      },
                      {type : 'email'}
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 15,
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
          <Modal footer={null} title="Update taches" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                           // id : project.id ,
                           //tache_id : tache.tache_id,
                           //etat : tache.etat ,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                           label="tache_id"
                            name="tache_id"
                            rules={[{ required: true, message: 'Please input your tache_id !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label=" etat"
                            name="etat"
                            rules={[{ required: true, message: 'Please input your etat !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                
               
            </Modal>
           
        </div>
        
    ) 
} ;

export default Taches
