import { Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getproject, getprojects, selectprojects, getprojectbyclient, selectauthedproject, selectproject } from '../features/project/projectsSlice';
import { selectauthedtaches } from '../features/tache/tachesSlice';
import { selectusers , getusers, getuser} from '../features/users/usersSlice';

const Projectt = () => {

    const dispatch = useDispatch()
    const project = useSelector(selectprojects)
   
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
    useEffect(() => {    
        dispatch(getprojects())  
    } , []);

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
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
          >   
              
            
            <Form.Item
                  label="get Project By Id "
                  name="project_id"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your project_id !',
                      },
                  ]}
              >
                  <Input />
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
       
        <Descriptions style={{ marginTop: "50px" }} title="Project ">
               
                <Descriptions.Item label="client">{project.client}</Descriptions.Item>
                
                <Descriptions.Item label="project_name">{project.projectname}</Descriptions.Item>
                <Descriptions.Item label="scrum_master">{project.scrum_master}</Descriptions.Item>
                <Descriptions.Item label="date_debut">{project.date_debut}</Descriptions.Item>
                <Descriptions.Item label="date_fin">{project.date_fin}</Descriptions.Item>
                <Descriptions.Item label="description">{project.description}</Descriptions.Item>
                 </Descriptions> 
        </div>
          <br></br>
          
        </div>
        
    ) 
} ;

export default Projectt
