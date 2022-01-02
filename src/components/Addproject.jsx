import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { createproject, getprojects, selectaddstatus  } from '../features/project/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';


const AddProject = () => {
  const dispatch = useDispatch()
  const addstatus = useSelector(selectaddstatus)
  const success = () => {
    message.success('project successfuly created');
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
            date_fin : values.date_fin ,
           emailclient : values.emailclient ,
           emailmaster : values.emailmaster ,
           data : values 
        }

        dispatch(createproject(data))
       console.log(data)
     //  success()
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
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="date_fin"
                name="date_fin"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date_fin !',
                    },
                ]}
            >
                <Input />
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
                <Input />
            </Form.Item>
            <Form.Item
                label="email master"
                name="emailmaster"
                rules={[
                    {
                        required: true,
                        message: 'Please input your emailmaster !',
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
                <Button style={{background: "steelblue" ,outline:"none",width:'125%',border:'none'}} type="primary" htmlType="submit">
                    Add
                </Button>
                
            </Form.Item>
        </Form>
        
    </div>
  
)
} ;


export default AddProject


