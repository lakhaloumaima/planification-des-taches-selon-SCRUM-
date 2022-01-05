import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  getuser, login, selectautherror, selectauthstatus, selectusers } from '../features/users/usersSlice';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Alert, message } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const authstatuss = useSelector(selectauthstatus)
  const dispatch = useDispatch()
  const user = useSelector(selectusers)
 

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
    const authentication = useSelector(selectauthstatus)
    const history = useHistory()
    const autherror = useSelector(selectautherror)
    const authstatus = useSelector(selectauthstatus)
    useEffect(() => {

        console.log('hello ');
        if (authstatus === 'success') {
            success()
            history.push('/Home')
        }
        
        
    }, [authstatus]);
    const success = () => {
        message.success('you successfuly loged in');
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
                <Row>
                    <Col span={8} offset={7} >
                        {
                            authentication.authstatus === 'failure'
                            &&
                            <Alert style={{ marginBottom: "10px" }} message={authentication.error} type="error" showIcon />
                        }
                    </Col>
                </Row>
              
                
                <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                required: true,
                                message: 'The input is not valid E-mail!',
                            },
                            { type: 'email'  }
                        ]}
                    >
                        <Input />
                    </Form.Item>  

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        
                        ]}
                        hasFeedback
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
