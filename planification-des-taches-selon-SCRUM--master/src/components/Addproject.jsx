import React, { useEffect } from 'react';
import { Form, Input, Button, message , DatePicker } from 'antd';
import { createproject, getprojectbyclient, getprojects, selectaddstatus  } from '../features/project/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { selectusers, selectuserss } from '../features/users/usersSlice';


const AddProject = () => {
  const dispatch = useDispatch()
  const addstatus = useSelector(selectaddstatus)
  const users = useSelector(selectuserss)
  const user = useSelector(selectusers)

  const success = () => {
    message.success('project successfuly created');
};
const erreur = () => {
    message.error('project not created , date_fin < date_debut');
};
const erreur2 = () => {
    message.error('email client not created ');
};
useEffect(() => {
    if (addstatus === 'success') {
        dispatch(getprojects())     
    }
}, [addstatus]);

  const onFinish = (values) => {
        console.log('Success:', values);
        let data = {       
            projectname : values.projectname,
            description : values.description ,
            
            date_debut : values.date_debut ,
            date_fin : values.date_fin > values.date_debut ? values.date_fin : erreur()  ,
            
            emailclient : values.emailclient == user.email ? values.emailclient  : erreur2() ,
            emailmaster : values.emailmaster ,
            data : values 
        }
       // dispatch(getprojectbyclient(data))
        dispatch(createproject(data)) 
            success()
            console.log(data)
        
    
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  return (   
    <div className='products-catagories-area clearfix' style={{ marginTop: "-150px" }}  >   
        <Form
        style={{marginTop:"200px"  }}
            name="basic"
            labelCol={{
                span: 4,
                offset:3
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
               remember: true,
               email : user.email
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >      
            <Form.Item
                label="Project name"
                name="projectname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your project_name !',
                        
                    },
                    {type:'string' , min:5}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="description "
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input your description !',
                    },
                    {type:'string' , max:200}
                ]}
            >
                <Input />
            </Form.Item>
           
            <Form.Item
                label="date_debut "
                name="date_debut"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date_debut !',
                    },
                    {type:'date' }
                ]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="date_fin"
                name="date_fin"
                rules={[
                    {  
                        required: true,
                        message: 'Please input your date_fin !',
                    },
                    {type:'date' }
                ]}
            >
                <DatePicker />
            </Form.Item>
            
            <Form.Item
                label="email client"
                name="emailclient"
                rules={[
                    {         
                        required: true,
                        message: 'Please input your emailclient !',
                    },
                
                ]}
            >
                <Input  defaultValue={user.email} />
            </Form.Item>
            <Form.Item
                label="email master"
                name="emailmaster"
                rules={[
                    {         
                        required: true,
                        message: 'Please input your emailmaster !',
                    },
                    { type: 'email' }
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
                <Button style={{background: "steelblue" ,outline:"none",width:'125%',border:'none'}} type="primary" htmlType="submit">
                    Add
                </Button>
                
            </Form.Item>
        </Form>
        
    </div>
  
)
} ;


export default AddProject


