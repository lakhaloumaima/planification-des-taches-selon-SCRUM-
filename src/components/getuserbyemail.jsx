import { Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getuser, getusers, selectautheduser, selectusers } from '../features/users/usersSlice';



const Userr = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectusers)
   
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {    
       // dispatch(getusers())  
    } , []);

    const onFinish = (values) => {     
        console.log('Success:', values);
         let data = {
             email : values.email ,      
         }
     dispatch(getuser(data))
     console.log("data one user :" + data)
     //dispatch(getprojects(data))
     }
 
    const onFinishFailed = (errorInfo) => {
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
                  label="get User By email "
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
                      span: 8,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      See 
                  </Button>
                  </Form.Item>
          </Form>
          <div>
       
        <Descriptions style={{ marginTop: "50px" }} title="User ">
                <Descriptions.Item label="username">{user.username}</Descriptions.Item>
                <Descriptions.Item label="roll">{user.roll}</Descriptions.Item>
                <Descriptions.Item label="email">{user.email}</Descriptions.Item>

                <Descriptions.Item label="phoneNumber">{user.phoneNumber}</Descriptions.Item>
               
                <Descriptions.Item label="age">{user.age}</Descriptions.Item>
                <Descriptions.Item label="description">{user.description}</Descriptions.Item>
                 </Descriptions> 
        </div>
          <br></br>
          
        </div>
        
    ) 
} ;

export default Userr
