import { Badge, Button, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletetache, getprojects, selectauthedproject, selectprojects, updatetache } from '../features/project/projectsSlice';
import {
    CheckCircleOutlined, CloseCircleOutlined, CheckOutlined, EditOutlined 
} from '@ant-design/icons';
import { selectusers } from '../features/users/usersSlice';


const ListTaches = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const users = useSelector(selectusers)
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
/*
    const update = (tache, value) => {
        let data = {
            id: tache._id,
            data: {
                etat: value
            }
        }

        dispatch(updateproject(data))
    }
    */
   
    const onFinish = (values) => {   
       
       console.log('Success:', values);
        let data = {
            tache_id : values.tache_id ,      
        }
        dispatch(deletetache(data))
    }
    const onFinish2 = (values) => {   
       
        let dataa = {
            tache_id : values.tache_id ,  
            dataa : values,
        }
        dispatch(updatetache(dataa))
        handleCancel() 
        //failed();
    };
  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const addTache  = () => {
        window.location.href = '/Addtache'
       
    }
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
    const project = useSelector(selectauthedproject)

    useEffect(() => {
            dispatch(getprojects())
    }, []);

 const columns = [
    {
        title: 'Id project',
        dataIndex: 'id',
        key: 'id',
        render: (text, record) => (
            <>
                {record.id} <br></br>
                

            </>
        ),
    },
    
    {
        title: 'Id tache',
        dataIndex: 'tache_id',
        key: 'tache_id',
        render: (text, record) => (
            <>
                {record.tache[0]["tache_id"]} <br></br>
                

            </>
        ),
    },
    {
        title: 'Date_debut',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <> 
          { record.tache[0]["date_debut"] }
              
                
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
                {record.tache[0].date_fin} <br></br>
                
                

            </>
        ),
    },
    {
        title: 'Developer Name',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                
                {record.tache[0].developer} <br></br>
                
            </>
        ),
    },
    {
        title: 'Tache Name',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
               
                {record.tache[0].tache_name} <br></br>
                

            </>
        ),
    },
    {
        title: 'State',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].etat === "en_attente" && <Tag color="red">to do</Tag>}
                {record.tache[0].etat === "en_cours" && <Tag color="cyan">in progress</Tag>}
                {record.tache[0].etat === "terminee" && <Tag color="lime">terminated</Tag>} <br></br>
                </>
        ),
       
    },
    {
        title: 'Actions',
        key: 'tache',
        dataIndex: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].etat === "en_attente" &&
                    <>
                        <CheckCircleOutlined /*onClick={() => update(record, 2)}*/ style={{ fontSize: "20px", color: "lime", cursor: "pointer" }} />
                        <CloseCircleOutlined /*onClick={() => update(record, 3)}*/ style={{ fontSize: "20px", color: "cyan", marginLeft: "10px", cursor: "pointer" }} />
                    </>
                }

                {record.tache[0].etat === "terminee" && <CheckOutlined style={{ color: "lime", fontSize: "20px" }} />}
                {record.tache[0].etat === "en_cours" && < CloseCircleOutlined style={{ color: "cyan", fontSize: "20px" }} />}
                <br></br>
               
            </>
        ),
    },
    {
        title: 'Update Tache',
        dataIndex: 'update',
        key: 'update',
        render: (text, record) => (
            <>
               
               <li><a onClick={() => showModal()} ><EditOutlined /></a></li>
          
                

            </>
        ),
    },

];

return (
    <div className="container" > 
          <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={addTache}>
        Add Tache
      </button> 
          
          <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 8,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
          >   
              
            
            <Form.Item
                  label="Delete by Tache Id "
                  name="tache_id"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your id !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 7,
                      span: 8,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      Delete 
                  </Button>
                  </Form.Item>
          </Form>
          
          <div> <br></br>
        <h2>Taches <Badge count={projects.length} showZero /> </h2>
        <Table columns={columns} dataSource={projects} />
            
        </div>
          <br></br>
          <Modal footer={null} title="Update taches" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            
                        }}
                        onFinish={onFinish2}
                        onFinishFailed={onFinishFailed}
                    >
                        
                        <Form.Item
                           label="project_id"
                            name="id"
                            rules={[{ required: true, message: 'Please input your project_id !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="tache_id"
                            name="tache_id"
                            rules={[{ required: true, message: 'Please input your tache_id !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="tache name"
                            name="tache_name"
                            rules={[{ required: true, message: 'Please input your tache_name !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="date debut"
                            name="date_debut"
                            rules={[{ required: true, message: 'Please input your date_debut !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="date fin"
                            name="date_fin"
                            rules={[{ required: true, message: 'Please input your date_fin !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="developper"
                            name="developer"
                            rules={[{ required: true, message: 'Please input your developer !' }]}
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

export default ListTaches