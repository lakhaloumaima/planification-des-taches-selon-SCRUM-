import { Avatar, Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
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
        </div>
          <br></br>
          
        </div>
        
    ) 
} ;

export default Userr
