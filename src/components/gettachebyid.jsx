import { Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { gettaches, selectauthedtaches , selecttachess} from '../features/tache/tachesSlice';
import { getprojects, selectprojects } from '../features/project/projectsSlice';
import { getusers, selectusers } from '../features/users/usersSlice';


const Taches = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
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
     
    }, []);
    const onFinish = (values) => {   
       
        console.log('Success:', values);
         let data = {
             tache_id : values.tache_id ,      
         }
     dispatch(gettaches(data))
     
     //dispatch(getprojects(data))
     }
   /* const onFinish2 = (values) => {   
       
        let data = {
            tache_id : values.tache_id ,  
            data : values,
        }
        dispatch(updatetaches(data))
        console.log(data)
        handleCancel() 
        //failed();
    };
  */
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const dispatch = useDispatch()
    const tache = useSelector(selectauthedtaches)
    const projects = useSelector(selectprojects)
    const users = useSelector(selectusers)

 /*
 const columns = [
   
    
    {
        title: 'Id tache',
        dataIndex: 'tache_id',
        key: 'tache_id',
        render: (text, record) => (
            <>
                {record.tache_id} 
                

            </>
        ),
    },
    {
        title: 'Date_debut',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <> 
          { record.date_debut}
              
                
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
                
            {
                record.developer 
            } 
            
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
*/

return (
    <div className="container" >  
          
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
                  label="get Tache By Id "
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
                      See 
                  </Button>
                  </Form.Item>
          </Form>
          <div>
       
        <Descriptions style={{ marginTop: "50px" }} title="Taches">
                <Descriptions.Item label="tache_id">{tache.tache_id}</Descriptions.Item>
                <Descriptions.Item label="tache_name">{tache.tache_name}</Descriptions.Item>
                <Descriptions.Item label="project_name">{tache.project_name}</Descriptions.Item>
                <Descriptions.Item label="developer">{tache.developer}</Descriptions.Item>
                <Descriptions.Item label="date_debut">{tache.date_debut}</Descriptions.Item>
                <Descriptions.Item label="date_fin">{tache.date_fin}</Descriptions.Item>
                <Descriptions.Item label="Etat">{tache.etat}</Descriptions.Item>
        </Descriptions>  
        </div>
          <br></br>
          
          <Modal footer={null} title="Update taches" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            
                        }}
                       // onFinish={onFinish2}
                       // onFinishFailed={onFinishFailed}
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

export default Taches
