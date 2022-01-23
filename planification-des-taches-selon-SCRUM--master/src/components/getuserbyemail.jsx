import {  Button, Descriptions, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getuser, selectautheduser, selectdatachenged, selectusers, updateuser } from '../features/users/usersSlice';


const Userr = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectusers)

   // const users = useSelector(selectautheduser)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const datachanged = useSelector(selectdatachenged)

useEffect(() => { 
    getuser()
 }, [datachanged]);
    
    
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            
            email : values.email+"",
            firstname : values.firstname+"" ,
            age : values.age+"" ,
            description : values.description +"",
            lastName : values.lastName+"",
            //firstName : values.firstName,
            roll : values.roll+"" ,
            data : values ,
        }
        dispatch(updateuser(data))
        console.log(data)
        handleCancel()
        setIsModalVisible(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
/*
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
*/
return (
    <div className="container" >    
          <div>               
            <img className="profile-img" style={{width:"10%" }} src="../images/avatarr.png" alt />
                    
        <Descriptions style={{ marginTop: "50px" }} title="User ">
            
                <Descriptions.Item label="username">{user.username}</Descriptions.Item>
                <Descriptions.Item label="roll">{user.roll}</Descriptions.Item>
                <Descriptions.Item label="email">{user.email}</Descriptions.Item>
                
                <Descriptions.Item label="phoneNumber">{user.phoneNumber}</Descriptions.Item>
               
                <Descriptions.Item label="age">{user.age}</Descriptions.Item>
        </Descriptions> 
        <a onClick={() => showModal()} style={{ fontSize: "25px", color: "orange", cursor: 'pointer' }}><i class="glyphicon glyphicon-pencil"></i>Update</a>
        <Modal footer={null} title="Update users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            email : user.email , 
                            username : user.username ,
                            roll : user.roll ,
                            age : user.age ,  
                            phoneNumber: user.phoneNumber ,
                            id : user.id ,
                            firstName : user.firstName ,
                           
                         }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        
                        <Form.Item
                           label="email"
                            name="email"
                            rules={[{ required: false, message: 'Please input your email !' }]}
                        >
                            <Input defaultValue={user.email} />
                        </Form.Item>
                        <Form.Item
                           label="UserName"
                            name="username"
                            rules={[{ required: false, message: 'Please input your username !' }]}
                        >
                            <Input defaultValue={user.username}/>
                        </Form.Item>
                       
                        <Form.Item
                           label="roll"
                            name="roll"
                            rules={[{ required: false, message: 'Please input your roll !' }]}
                        >
                            <Input defaultValue={user.roll} disabled />
                        </Form.Item>
                         <Form.Item
                           label="phoneNumber"
                            name="phoneNumber"
                            rules={[{ required: false, message: 'Please input your phoneNumber !' }]}
                        >
                            <Input defaultValue={user.phoneNumber} />
                        </Form.Item>
                        <Form.Item
                           label="age"
                            name="age"
                            rules={[{ required: false, message: 'Please input your age !' }]}
                        >
                            <Input defaultValue={user.age}/>
                        </Form.Item>
                       
                       
                        
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
          <br></br>
          
        </div>
        
    ) 
} ;

export default Userr