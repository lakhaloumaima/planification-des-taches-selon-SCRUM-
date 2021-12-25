import { Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { gettaches, selectauthedtaches , updatetaches} from '../features/tache/tachesSlice';
import { getprojects } from '../features/project/projectsSlice';


const Taches = () => {

    const dispatch = useDispatch()
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
    useEffect(() => {    
        dispatch(getprojects())  
    } , []);

    const onFinish = (values) => {     
        console.log('Success:', values);
         let data = {
             tache_id : values.tache_id ,      
         }
     dispatch(gettaches(data))
     console.log("data one tache :" + data)
     //dispatch(getprojects(data))
     }

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
  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
       
        <Descriptions style={{ marginTop: "50px" }} title="Tache ">
                <Descriptions.Item label="tache_id">{tache.tache_id}</Descriptions.Item>
                
                <Descriptions.Item label="tache_name">{tache.tache_name}</Descriptions.Item>
                <Descriptions.Item label="project_name">{tache.project_name}</Descriptions.Item>
                <Descriptions.Item label="developer">{tache.developer}</Descriptions.Item>
                <Descriptions.Item label="date_debut">{tache.date_debut}</Descriptions.Item>
                <Descriptions.Item label="date_fin">{tache.date_fin}</Descriptions.Item>
                <Descriptions.Item label="Etat">{tache.etat}</Descriptions.Item>
        </Descriptions> 

        <a onClick={() => showModal()} style={{ fontSize: "25px", color: "SteelBlue", cursor: 'pointer' }}><i class="glyphicon glyphicon-pencil"></i>Update</a>
        
        </div>
          <br></br>
          
          <Modal footer={null} title="Update taches" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            tache_id : tache.tache_id,
                            date_debut : tache.date_debut ,
                            date_fin : tache.date_fin ,
                            developer : tache.developer ,
                            tache_name : tache.tache_name ,
                            etat : tache.etat ,
                        }}
                        onFinish={onFinish2}
                        onFinishFailed={onFinishFailed2}
                    >
                        
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
