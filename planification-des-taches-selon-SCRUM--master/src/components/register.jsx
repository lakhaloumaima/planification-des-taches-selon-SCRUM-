import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Result, Alert, InputNumber, message, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { registermaster, selectregistration } from '../features/master/mastersSlice';
const { Option } = Select;
const Register = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    const dispatch = useDispatch()

    const registration = useSelector(selectregistration)
    const erreur = () => {
        message.error('project not created');
    };
    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            firstName : values.firstName+"",
            lastName : values.lastName+"",        
            email: values.email + "",
            roll : values.roll =="client" || values.roll =="developer" || values.roll =="scrum_master" ? values.roll+"" :erreur()  ,
            age : values.age+"",
            phoneNumber : values.phoneNumber+"",
            password: values.password+"",
        }
        

        dispatch(registermaster(data))
        // console.log(data)
    };


    // const onFinish = ( ) => {
    //     dispatch(registermaster({
    //         firstName : 'oussema',
    //         lastName : 'heni',        
    //         email: 'oussema@gmail.com',
    //         roll : 'client' ,
    //         age : '22',
    //         phoneNumber : '22222222',
    //         password: 'oussema123',
    //     }))
    // }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="Container">
            {registration === 'success' ? <RegisterResult /> : <div className='products-catagories-area clearfix' >

              
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
                 //   validateMessages={validateMessages}
                >
                    <Row>
                        <Col span={2} offset={10} >
                            <h1> <img className="profile-img" style={{width:"70%" }} src="../images/avatarr.png" alt />
                       Register</h1>
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
                            { type: 'string', max: 14 }
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
                            { type: 'string', max: 14 }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                required: true,
                                message: 'The input is not valid E-mail!',
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
                        <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="client">client</Option>
                        <Option value="developer">developer</Option>
                        <Option value="scrum_master">scrum_master</Option>
                        </Select>
                    </Form.Item>
                   
                    <Form.Item
                         name="phoneNumber"
                         label="phoneNumber"
                         rules={[
                            
                             {
                                 required: true,
                                 message: 'Please input your phoneNumber !',
                             },
                             { type: 'string', min:8 ,max: 8 }
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
                       <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            { type: 'string' }
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
                    <Button onClick={()=> window.location.href = '/Auth'}  type="primary" key="console">
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