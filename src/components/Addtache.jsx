import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { createtache } from '../features/tache/tachesSlice';
import { useDispatch } from 'react-redux';

const Addtache = () => {
     
  const dispatch = useDispatch()

  const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            project_id : values.project_id,
            email : values.email ,
            tache_name : values.tache_name ,
            date_debut : values.date_debut ,
            date_fin : values.date_fin ,
            etat : values.etat 
        }

        dispatch(createtache(data))
       // window.location.href = '/ListT'
        //failed();
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
                label="Project id"
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
                label="Email developper"
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
                label="tache_name "
                name="tache_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your tache_name !',
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
                label="Etat"
                name="etat"
                rules={[
                    {
                        required: true,
                        message: 'Please input your etat !',
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


export default Addtache


