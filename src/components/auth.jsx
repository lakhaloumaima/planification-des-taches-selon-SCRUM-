import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  getuser, login, selectauthstatus, selectusers } from '../features/users/usersSlice';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Alert, message } from 'antd';
import { useSelector } from 'react-redux';

const Auth = () => {
  const authstatuss = useSelector(selectauthstatus)
  const dispatch = useDispatch()
  const user = useSelector(selectusers)
  useEffect(() => {
    // storing input name
    localStorage.setItem("email", JSON.stringify(user.email));
  }, [user.email]);


  const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            email : values.email,
            password : values.password
        }
     
      //  dispatch(getprojectbyclient(data))
       // dispatch(gettachebydeveloper(data))
        dispatch(getuser(data))

        dispatch(login(data))
        //window.location.reload('/Home') ;
        
       /*
        if (authstatuss == 'success') {
             window.location.href = '/Home'
             dispatch(getuser(data))

        }
        */
        //failed();
    };
   

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ marginTop: "-200px" }}  >
           
           
            <div className='products-catagories-area clearfix' >
            
            <Form
            style={{marginTop:"200px"}}
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
                <Row>
                    <Col span={2} offset={10} >
                        <h1><img className="profile-img" style={{width:"70%" }} src="../images/avatarr.png" alt />
                     Login</h1>
                        
                    </Col>
                </Row>

              
                
                <Form.Item
                    label="Email"
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password !',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 7,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 7,
                        span: 8,
                    }}
                >
                    <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                        Login
                    </Button>
                    <a href="/Register">Sign up</a>
                </Form.Item>
            </Form>
            
        </div>
        </div>
    )
}

export default Auth
