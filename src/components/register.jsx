import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Result, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registermaster, selectregistration } from '../features/master/mastersSlice';

const Register = () => {

    const dispatch = useDispatch()

    const registration = useSelector(selectregistration)

    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            firstName : values.firstName,
            lastName : values.lastName,        
            email: values.email,
            roll : values.roll ,
            age : values.age,
            phoneNumber : values.phoneNumber,
            password: values.password,

        }

        dispatch(registermaster(data))
        console.log(data)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="Container">
            {registration.registerstatus === 'success' ? <RegisterResult /> : <div className='products-catagories-area clearfix' >

                <Form
                    style={{ marginTop: "20px" }}
                    name="basic"
                    labelCol={{
                        span: 4,
                        offset: 3
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
                            <h1> <img className="profile-img" style={{width:"70%" }} src="../images/avatarr.png" alt />
                       Register</h1>
                             </Col>
                    </Row>

                    

                    <Row>
                        <Col span={8} offset={7} >
                            {
                                registration.registerstatus === 'failure'
                                &&
                                <Alert style={{ marginBottom: "10px" }} message={registration.error} type="error" showIcon />
                            }
                        </Col>
                    </Row>


                    <Form.Item
                        label="firstName"
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your firstName!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="lastName"
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lastName!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>                   

                    <Form.Item
                         name="roll"
                         label="Roll"
                         rules={[
                             
                             {
                                 required: true,
                                 message: 'Please input your roll !',
                             },
                         ]}
                     >
                        <Input />
                    </Form.Item>
                    <Form.Item
                         name="phoneNumber"
                         label="phoneNumber"
                         rules={[
                            
                             {
                                 required: true,
                                 message: 'Please input your phoneNumber !',
                             },
                         ]}
                     >
                        <Input />
                    </Form.Item>
                    <Form.Item
                         name="age"
                         label="age"
                         rules={[
                            
                             {
                                 required: true,
                                 message: 'Please input your age !',
                             },
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
                        wrapperCol={{
                            offset: 7,
                            span: 8,
                        }}
                    >
                        <Button style={{ background: "SteelBlue", outline: "none", width: '100%', border: 'none' }} type="primary" htmlType="submit">
                            register
                        </Button>
                        <a href="/Auth">Sign in</a>
                    </Form.Item>
                </Form>
            </div>}
        </div>
    )
}

function RegisterResult() {
    return (
        <div style={{ alignSelf:'center' }} >

            <Result
                status="success"
                title="Successfully registred login naw !"
                extra={[
                    <Button onClick={()=> window.location.href = '/login'}  type="primary" key="console">
                        Login
                    </Button>
                ]}
            />
            
        </div>
    )
}

export default Register

// react & redux
// react => action => redux  (usedispatch(action elifi slice))
// react can read state from redux (useSlector (selectuer))